import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiContants from '../constants/ApiContants';

const AuthRequest = axios.create({
  baseURL: ApiContants.BACKEND_API.BASE_API_URL,
});

const register = async user => {
  if (!user?.name || !user?.surname || !user?.email || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {
    let requestBody = {
      name: user?.name,
      surname: user?.surname,
      email: user?.email,
      password: user?.password,
    };

    console.log('llega hasta antes del axios', requestBody);
    console.log('backend', ApiContants.BACKEND_API.REGISTER);
    let registerResponse = await AuthRequest.post(
      ApiContants.BACKEND_API.REGISTER,
      requestBody,
    );

    console.log('response', registerResponse.data);

    let userToken = registerResponse.data.token;
    console.log(userToken);
    await AsyncStorage.setItem('userToken', userToken);
    const token = await AsyncStorage.getItem('userToken');
    console.log('tokenstorage', token);

    return registerResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

const login = async user => {
  if (!user?.email || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {
    let requestBody = {
      email: user?.email,
      password: user?.password,
    };
    console.log('llega hasta antes del axios', requestBody);
    let loginResponse = await AuthRequest.post(
      ApiContants.BACKEND_API.LOGIN,
      requestBody,
    );
    console.log(loginResponse.data.token);

    let userToken = loginResponse.data.token;
    console.log(userToken);
    await AsyncStorage.setItem('userToken', userToken);
    const token = await AsyncStorage.getItem('userToken');
    console.log('tokenstorage', token);

    return loginResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

const checkUserExist = async (type, value) => {
  try {
    let params = {[type]: value};
    let userCheckResponse = await AuthRequest.get(
      ApiContants.BACKEND_API.USER_EXIST,
      {params},
    );
    return userCheckResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

export default {register, login, checkUserExist};

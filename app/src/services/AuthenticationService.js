import axios from 'axios';
// import {ApiContants} from '../contants';

// const AuthRequest = axios.create({
//   baseURL: ApiContants.BACKEND_API.BASE_API_URL,
// });

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
    // let registerResponse = await AuthRequest.post(
    //   ApiContants.BACKEND_API.REGISTER,
    //   requestBody,
    // );
    console.log('llega hasta antes del axios',requestBody)
    
    let registerResponse = await axios.post('http://192.168.1.101:8000/api/register',requestBody)
      
    console.log('response',registerResponse.data)

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
    // let loginResponse = await AuthRequest.post(
    //   ApiContants.BACKEND_API.LOGIN,
    //   requestBody,
    // );
    let loginResponse = await axios.post('http://192.168.1.101:8000/api/login',requestBody)
    console.log(loginResponse.data)
    return loginResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

// const checkUserExist = async (type, value) => {
//   try {
//     let params = {[type]: value};
//     let userCheckResponse = await AuthRequest.get(
//       ApiContants.BACKEND_API.USER_EXIST,
//       {params},
//     );
//     return userCheckResponse?.data;
//   } catch (error) {
//     console.log(error);
//     return {status: false, message: 'Oops! Something went wrong'};
//   }
// };

// export default {register, login, checkUserExist};
export default {login,register};
import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


export const COLORS = {
    gray:'#F4F4F4',
    primary : "#FF5678",
    pink: '#D3375C',
    black: "#000000",
    white: "#FFFFFF",
    background: "#FFFFFF"
}

export const SIZES = {
    base: 10,
    width,
    height
}


const theme = { COLORS, SIZES };

export default theme;
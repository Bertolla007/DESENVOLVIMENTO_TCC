import { View, Text, Image, TouchableOpacity, useWindowDimensions } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"
//erro inexistente do typescript
import IFPR_logo from "../../../assets/images/IFPR_logo.png"
import planeta from '../../../assets/images/Planeta_mainfo.png'

const LoginContent = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    return (

        <View style={styles.container}>
        <View style={styles.main_info_container}>
        <Image style={[styles.logo]} source={IFPR_logo}/>
            <Text style={styles.main_text}>BEM VINDO!</Text>

        <TouchableOpacity style={styles.searchBar }>
            <Text style={styles.h2_text}>Endereço de e-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBar }>
            <Text style={styles.h2_text}>Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:'flex-end'}}>
            <Text style={[styles.h3_text, {color: '#1a1a1a'}]}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.searchBar, {backgroundColor: '#043822'} ]}>
            <Text style={[styles.h2_text, {color: 'white'}]}>Login</Text>
        </TouchableOpacity>    
        </View>
        <View style={styles.main_info_container}>

        {width >= 740 ?
            <Image style={styles.image} source={planeta}/>
        : null}
        </View>
        </View>
  
    )}

export default LoginContent;
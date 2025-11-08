import { View, Text, Image, TouchableOpacity, useWindowDimensions, Animated, Pressable, Modal, Button } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { useRef, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"
//erro inexistente do typescript
import IFPR_logo from "../../../assets/images/IFPR_logo.png"
import LoginContent from "../login_content"
import { transform } from "@babel/core"
const Header = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    const route = useRoute();
    const rotaAtual = route.name;

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.container}>
        <View style={styles.green_status_bar}/>
        <View style={styles.main_info_container}>
            <Image style={styles.image} source={IFPR_logo}/>

            <View style={styles.searchBar}>
                <Text style={{opacity: 0.5}}>
                    Pesquisar
                </Text>
                {width < 650 ? <Feather name="search" size={28} style={{opacity: 0.5}}/> : null}
            </View>
            {width >= 650 ?
            <>
            <Feather name="search" size={28}  />
            <Pressable onPress={() =>setIsModalVisible(true)}>
                <Text style={styles.infoLinks_text}>Iniciar Sessão</Text>
            </Pressable>
            </>
            : null}
            <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            transparent={true}
            animationType="fade"
            presentationStyle="pageSheet">
                <View style={[styles.main_info_container, {flex: 1}, {flexDirection: 'column'}, {alignItems: 'center'}, {position: 'relative'}]}>
                <Pressable onPress={() => setIsModalVisible(false)} style={[{flexDirection: 'row'}, {alignItems:'center'},{justifyContent: 'center'}, {gap: 10}, {position:'fixed'},{zIndex: +10}, {top: '25%'}]}>
                    <Feather name="arrow-left" size={40} style={[{}]}/>
                    <Text style={[{fontSize: 18}, {fontWeight: 600}]}>Cancelar</Text>
                </Pressable>
                    <LoginContent/>
                </View>
            </Modal>   
            {width < 650 ?
            <View style={{flexDirection:'row', alignSelf: 'flex-end', marginBottom: 4}}>
            <TouchableOpacity>
                <DrawerToggleButton/>
            </TouchableOpacity>
            </View>
            : null}
        </View>
    
        {width >= 650 ?
                <View style={styles.infoLinks}>
                    <TouchableOpacity>
                    <Link href={'..'}>
                    {rotaAtual === 'index' ? 
                    <Text style={styles.infoLinks_text_active}>
                        Inicio
                    </Text>
                    :
                    <Text style={styles.infoLinks_text}>
                        Inicio
                    </Text>
                    }
                    </Link>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Link href={'/(stack)/pages/available_projects'}>
                    {rotaAtual === 'pages/available_projects' ? 
                    <Text style={styles.infoLinks_text_active}>
                        Projetos Disponiveis
                    </Text>
                    :
                    <Text style={styles.infoLinks_text}>
                        Projetos Disponiveis
                    </Text>
                    }
                    </Link>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Link href={'/(stack)/pages/ODS'}>
                    {rotaAtual === 'pages/ODS' ? 
                    <Text style={styles.infoLinks_text_active}>
                        ODSs
                    </Text>
                    :
                    <Text style={styles.infoLinks_text}>
                        ODSs
                    </Text>
                    }
                    </Link>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Link href={'/(stack)/pages/about_us'}>
                    {rotaAtual === 'pages/about_us' ? 
                    <Text style={styles.infoLinks_text_active}>
                        Sobre nós
                    </Text>
                    :
                    <Text style={styles.infoLinks_text}>
                        Sobre nós
                    </Text>
                    }
                    </Link>
                    </TouchableOpacity>
                </View>
            : null}
            </View>
        
    )}

export default Header;
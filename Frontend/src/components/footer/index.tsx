import { View, Text, Image, TouchableOpacity, useWindowDimensions, FlatList, ScrollView } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"

import ifpr_footer from '../../../assets/images/ifpr_footer.png'

const Footer = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    return (
        <>
        <View style={styles.green_status_bar}>
            <Text style={styles.footer_text}>
                Acesse projetos sustentáveis, independente de onde estiver!
            </Text>
        </View>
        <View  style={styles.main_container}>
            <View style={styles.container_content}>
            <Image source={ifpr_footer} style={styles.image}/>
            <Text style={styles.h2_text}>Rua Emílio Bertolini, 54 - Cajuru, {'\n'}82920-030 Curitiba PR Brasil{'\n'}+55 (41) 3888-5250</Text>
            </View>
        </View>
        </>
    )}

export default Footer;
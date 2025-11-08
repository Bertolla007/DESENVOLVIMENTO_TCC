import { View, Text, Image, TouchableOpacity, useWindowDimensions, FlatList, ScrollView } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"

import ods4 from '../../../assets/images/ODSs/ods4.png'
import ods7 from '../../../assets/images/ODSs/ods7.jpg'
import ods15 from '../../../assets/images/ODSs/ods15.png'

const HomeODS = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    return (
        <View  style={styles.main_container}>
            <Text style={styles.main_text}>
                Objetivos de{'\n'}
                desenvolvimento sustentável
            </Text>
        
            <TouchableOpacity>
            <Link href={'/(stack)/pages/ODS'}>
            <Text style={styles.h3_text}>
                Veja mais:
            </Text>
            </Link>
            </TouchableOpacity>
        <View style={styles.container_projects} >
    <Link href={'/(stack)/pages/ODS'}>
        <TouchableOpacity>
            <View style={[styles.box_projects, {backgroundColor: '#F7C212'}]}>
            <Image source={ods7} style={[styles.image,{height:140}]}/>
            </View>
            <View style={styles.info_projects}>
                <Text style={styles.h2_text}>  
                    ENERGIA LIMPA E {'\n'}SUSTENTÁVEL
                </Text>
            </View>
        </TouchableOpacity>
    </Link>
    <Link href={'/(stack)/pages/ODS'}>
        <TouchableOpacity>
            <View style={[styles.box_projects,{backgroundColor: '#C41F2D'}]}>
            <Image source={ods4} style={styles.image}/>
            </View>
            <View style={styles.info_projects}>
                <Text style={styles.h2_text}>  
                    EDUCAÇÃO DE {'\n'}QUALIDADE
                </Text>
            </View>
        </TouchableOpacity>
    </Link>
    <Link href={'/(stack)/pages/ODS'}>
        <TouchableOpacity>
            <View style={[styles.box_projects,{backgroundColor: '#5BB846'}]}>
            <Image source={ods15} style={[styles.image,{height:140}]}/>
            </View>
            <View style={styles.info_projects}>
                <Text style={styles.h2_text}>  
                    VIDA TERRESTRE
                </Text>
            </View>
        </TouchableOpacity>
    </Link>
        </View>
        </View>
    )}

export default HomeODS;
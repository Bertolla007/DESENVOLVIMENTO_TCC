import { View, Text, Image, TouchableOpacity, useWindowDimensions, FlatList, ScrollView } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"

import ods1 from '../../../assets/images/ODSs/ods1.png'
import ods2 from '../../../assets/images/ODSs/ods2.png'
import ods3 from '../../../assets/images/ODSs/ods3.png'

const ODS_icons = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    return (
        <View  style={styles.main_container}>
            <Text style={styles.main_text}>
                Objetivos de{'\n'}
                desenvolvimento sustentável
            </Text>
        <View style={styles.container_projects}>
        <View style={styles.column_projects}>
        <TouchableOpacity>
            <View style={[styles.box_projects, {backgroundColor: '#ff1f39'}]}>
                <View style={styles.ods_number}>
                    <Text style={[styles.h2_text, {color: 'white'}, {fontSize: 30}]}>
                        1
                    </Text>
                </View>
                <Image source={ods1} style={styles.image}/>
            </View>
            <View style={styles.title_projects}>
                <Text style={styles.h2_text}>  
                    ERRADICAÇÃO DA POBREZA
                </Text>
            </View>
        </TouchableOpacity>
        <Text style={[styles.h3_text, styles.info_ods]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptates dolorem in fugiat, dolores aspernatur, cum dignissimos sed repellendus molestias eius, quidem impedit assumenda? Ab beatae iusto velit illum aspernatur.{'\n'}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit velit exercitationem iste, soluta dolorem possimus. Non earum sit cumque facilis cupiditate quod aperiam officia tempora harum ea! Nihil, asperiores.
        </Text>
        </View>
        </View>
        <View style={styles.container_projects}>
        <View style={styles.column_projects}>
        <TouchableOpacity>
            <View style={[styles.box_projects, {backgroundColor: '#DCA639'}]}>
                <View style={styles.ods_number}>
                    <Text style={[styles.h2_text, {color: 'white'}, {fontSize: 30}]}>
                        2
                    </Text>
                    <Image source={ods2} style={styles.image}/>
                </View>
            </View>
            <View style={styles.title_projects}>
                <Text style={styles.h2_text}>  
                    FOME ZERO E {'\n'}AGRICULTURA SUSTENTÁVEL
                </Text>
            </View>
        </TouchableOpacity>
        <Text style={[styles.h3_text, styles.info_ods]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptates dolorem in fugiat, dolores aspernatur, cum dignissimos sed repellendus molestias eius, quidem impedit assumenda? Ab beatae iusto velit illum aspernatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor, expedita eos repellendus deleniti, veniam minima accusamus quam est nesciunt veritatis. Consequuntur perspiciatis vitae sint dolorem debitis, reiciendis eveniet illo?
        </Text>
        </View>
        </View>
        <View style={styles.container_projects}>
        <View style={styles.column_projects}>
        <TouchableOpacity>
            <View style={[styles.box_projects, {backgroundColor: '#489751'}]}>
                <View style={styles.ods_number}>
                    <Text style={[styles.h2_text, {color: 'white'}, {fontSize: 30}]}>
                        3
                    </Text>
                    <Image source={ods3} style={styles.image}/>
                </View>
            </View>
            <View style={styles.title_projects}>
                <Text style={styles.h2_text}>  
                    SAÚDE E BEM ESTAR
                </Text>
            </View>
        </TouchableOpacity>
        <Text style={[styles.h3_text, styles.info_ods]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptates dolorem in fugiat, dolores aspernatur, cum dignissimos sed repellendus molestias eius, quidem impedit assumenda? Ab beatae iusto velit illum aspernatur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit velit exercitationem iste, soluta dolorem possimus. Non earum sit cumque facilis cupiditate quod aperiam officia tempora harum ea! Nihil, asperiores.
        </Text>
        </View>
        </View>
        </View>
    )}

export default ODS_icons;
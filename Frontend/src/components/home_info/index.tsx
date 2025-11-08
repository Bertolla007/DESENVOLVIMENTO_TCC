import { View, Text, Image, TouchableOpacity, useWindowDimensions, Animated, Pressable } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"
import { useRef } from "react"
//erro inexistente do typescript
import Planeta from '../../../assets/images/Planeta_mainfo.png'

const HomeInfo = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    const scale = useRef(new Animated.Value(1)).current;
        
    const onHoverIn = () => {
        Animated.spring(scale, {
            toValue: 1.03,
            useNativeDriver: true,
        }).start();
    };
        
    const onHoverOut = () => {
        Animated.spring(scale, {
            toValue: 1, 
            useNativeDriver: true,
        }).start();
    };
    return (
        <View  style={styles.main_container}>
            <View style={styles.info_container}>
            <Text style={styles.main_text}>
            PROJETOS            DE{"\n"}
            SUSTENTABILIDADE
            </Text>
            <Text style={styles.h2_text}>
                Iniciativas voltadas à preservação
                do meio ambiente e ao 
                desenvolvimento sustentável
            </Text>
            <Pressable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
            <TouchableOpacity>
                <Link href={'/(stack)/pages/ODS'}>
                <Animated.View style={[styles.see_more_button,{transform: [{scale}]}]}>
                    <Text style={styles.h3_text}>
                        SAIBA MAIS
                    </Text>
                </Animated.View>
                </Link>
            </TouchableOpacity>
            </Pressable>
            </View>
            {width >= 650 ?
                <Image source={Planeta} style={styles.image}/>
                : null}
                     
        </View>
    )}

export default HomeInfo;
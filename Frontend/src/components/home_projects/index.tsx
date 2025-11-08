import { View, Text, Image, TouchableOpacity, useWindowDimensions, Animated, Pressable } from "react-native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"
import { useRef } from "react"

const HomeProjects = () => {
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
            <Text style={styles.main_text}>
                Projetos disponiveis
            </Text>

        <Text style={[styles.h2_text,{marginVertical: 20}]}>
            Conheça as iniciativas desenvolvidas com foco na preservação ambiental, educação sustentável e inovação social. Cada projeto tem seu objetivo relacionado a sustentabilidade promovendo diretamente a conscientização e o cuidado com o meio ambiente.
        </Text>
        <View style={styles.container_projects} >
        <TouchableOpacity>
            <View style={styles.box_projects}>
            </View>
            <View style={styles.info_projects}>
                <Text style={styles.h2_text}>  
                    REFORESTAÇÃO
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.box_projects}>
            </View>
            <View style={styles.info_projects}>
                <Text style={styles.h2_text}>  
                    GESTÃO DE RESÍDUOS
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.box_projects}>
            </View>
            <View style={styles.info_projects}>
                <Text style={styles.h2_text}>  
                    HORTA ORGÂNICA
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    )}

export default HomeProjects;
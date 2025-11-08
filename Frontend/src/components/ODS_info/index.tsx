import { View, Text, Image, TouchableOpacity, useWindowDimensions, Animated, Pressable } from "react-native"
import React, { useRef } from "react";
import { Link } from "expo-router"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
//erro inexistente do typescript
import ODS from '../../../assets/images/ODS.png'

const ODS_info = () => {
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
            OBJETIVOS           DE{"\n"}
            DESENVOLVIMENTO {'\n'}
            SUSTENTÁVEL
            </Text>
            <Text style={styles.h2_text}>
                Os ODSs são coletivos e globais, e a 
                colaboração de paises e atores é 
                fundamental para um mundo sustentavel
            </Text>
            </View>
            <Pressable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
            <Animated.View style={{ transform: [{ scale }] }}>
            {width >= 1520 ?
            <Image source={ODS} style={styles.image}/>
            : null}
            </Animated.View>
            </Pressable>        
        </View>
    )}

export default ODS_info;
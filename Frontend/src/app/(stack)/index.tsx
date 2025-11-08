import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from "react-native"
import { Link } from "expo-router"
import Header from "@/components/header"
import HomeInfo from "@/components/home_info"
import HomeProjects from "@/components/home_projects"
import Footer from "@/components/footer"
import HomeODS from "@/components/home_ods"

const Index = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
 return(
    <View style={styles.container}>
            <Header/>
        <ScrollView>
    <View style={styles.main_info}>
    <View style={styles.content}>
            <HomeInfo/>
    </View>
    </View>
    <View style={styles.content}>
        <HomeProjects/>
        <HomeODS/>
    </View>
        <Footer/>
        </ScrollView>
    </View>
 )
}
const getStyles = (width:number) => {
    const isBigScreen = width >= 1020
    const isLargeScreen = width >= 600;    
    return StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#FAFAEE',
        },
        main_info:{
            width: '100%',
            backgroundColor: '#1f6f5640',
            paddingBottom: 20,
            overflowY: 'hidden'
        },
        content:{
            marginHorizontal: isBigScreen ? '20%' : '6%',
        }
    });
}
export default Index;

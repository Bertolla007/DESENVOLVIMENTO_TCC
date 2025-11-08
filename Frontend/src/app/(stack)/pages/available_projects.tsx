import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from "react-native"
import { Link } from "expo-router"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsInfo from '@/components/projects_info'

const AvailableProjects = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
 return(
    <View style={styles.container}>
        <Header/>
    <ScrollView>
        <ProjectsInfo/>
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
export default AvailableProjects;
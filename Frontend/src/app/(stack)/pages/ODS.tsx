import Footer from "@/components/footer"
import Header from "@/components/header"
import ODS_icons from "@/components/ODS_icons"
import ODS_info from "@/components/ODS_info"
import { View, Text, useWindowDimensions, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"


const ODS = () => {
        const { width } = useWindowDimensions();
        const styles = getStyles(width);
 return(
    <View style={styles.container}>
        <Header/>
        <ScrollView>
            <View style={styles.main_info}>
            <View style={styles.content}>
                <ODS_info/>
            </View>
            </View>
            <View style={styles.ODSs}>
                <ODS_icons/>
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
        },
        ODSs:{
            marginHorizontal: width>= 1500 ? '20%' : '6%',
        }
    });
}
export default ODS;
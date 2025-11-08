import { colors } from "@/styles/colors"
import { StyleSheet} from "react-native"

export const getStyles = (width:number) => {
    const isLargeScreen = width >= 650;
    const isBigScreen = width >= 1020;
    
    return StyleSheet.create({
    main_container:{
        flexDirection: 'row',
        marginTop: '1.5%',
        justifyContent:isBigScreen ? 'space-between' : 'center',
        columnGap: 5,
    },
    info_container:{
        flexDirection: 'column',
        rowGap: isBigScreen ? 25 : 15, 
        position: 'relative', 
    },
    main_text:{
        fontSize: width >= 550 ? 50 : 34,
        fontWeight: 700,
        color: '#134535',
    },
    h2_text:{
        fontSize: width >= 550 ? 35 : 25,
        fontWeight: 500,
        color: '#134535',
        textAlign: width >= 550 ? 'justify' : 'left',
        width: width >= 550 ? 470 : 310,
    },
    h3_text:{
        fontSize: 20,
        fontWeight: 500,
        color: '#ffffffff',
    },
    see_more_button:{
        width: 230,
        backgroundColor: '#77A135',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        alignSelf: width >= 650 ? 'auto' : 'center',
        boxShadow: '0px 4px 8px #0000005c',
    },
    image:{
        position: 'absolute',
        right: 0,
        zIndex: -1,
        height:width >= 1020 ? 450 : 430,
        width:350,
    }
})
}
import { colors } from "@/styles/colors"
import { StyleSheet} from "react-native"

export const getStyles = (width:number) => {
    const isLargeScreen = width >= 650;
    const isBigScreen = width >= 1020;
    
    return StyleSheet.create({
    main_container:{
        backgroundColor: '#78a1356e',
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_content:{
        width: width>= 900 ? 900 : width >= 750 ? 550 : width >= 600 ? 400 : 300,
        flexDirection:'column',
        rowGap:30,
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    h2_text:{
        fontSize:18,
        fontWeight: 500,
        color: '#000000ff',
        textAlign:'left',
        marginLeft: 8,
    },
    footer_text:{
        fontSize: width >= 620 ? 22 : 18,
        fontWeight: 500,
        color: 'white',
        textAlign:'center',
    },
    green_status_bar:{
        backgroundColor: '#77A135',
        width: '100%',
        marginTop: 40,
        justifyContent:'center',
        alignItems:'center',
        padding: 3,
        boxShadow: '0px 4px 8px #0000005c',
    },
    image:{
        width: 288,
        height: 103,
        borderBottomWidth: 2,
        borderBottomColor: '#7d7d7dff',
    },
})
}
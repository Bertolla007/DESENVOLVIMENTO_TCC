import { colors } from "@/styles/colors"
import { StyleSheet} from "react-native"

export const getStyles = (width:number) => {
    const isLargeScreen = width >= 650;
    const isBigScreen = width >= 1020;
    
    return StyleSheet.create({
    main_container:{
        flexDirection: 'column',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_text:{
        fontSize: width >= 550 ? 50 : 34,
        fontWeight: 700,
        color: '#134535',
        marginVertical: 10,
    },
    h2_text:{
        fontSize:25,
        fontWeight: 500,
        color: '#134535',
        textAlign:'center',
    },
    container_projects:{
        flex: 1,
        flexDirection: width >= 970 ? 'row' : 'column',
        justifyContent: 'space-between',
        margin: 20,
        columnGap: 20,
        rowGap: 20,
    },
    box_projects:{
        backgroundColor: '#77A135',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 150,
        width: width >= 970 ? 300 : width >= 550 ? 450 : 300 ,
        position: 'relative',
        boxShadow: '0px 4px 8px #0000005c',
    },
    info_projects:{
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px #0000005c',
    },
})
}
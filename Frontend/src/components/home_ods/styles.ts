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
    },
    main_text:{
        fontSize: width >= 1150 ? 50 : 34,
        fontWeight: 700,
        color: '#134535',
        marginVertical: 10,
        textAlign: 'center',
    },
    h2_text:{
        fontSize:25,
        fontWeight: 500,
        color: '#134535',
        textAlign:'center',
    },
    h3_text:{
        fontSize:18,
        fontWeight: 500,
        color: '#2b7f86ff',
        left: width >= 1300 ? 0 : width >= 1020 ? -200 : 0,
    },
    container_projects:{
        alignItems: 'center',
        flex: 1,
        flexDirection: width >= 970 ? 'row' : 'column',
        justifyContent: 'center',
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
        justifyContent: 'center',
        alignItems:'center',
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
    image:{
        height: 110,
        width: 140,
        alignSelf: 'center',
    },
})
}
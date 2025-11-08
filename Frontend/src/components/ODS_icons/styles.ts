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
        fontSize:22,
        fontWeight: 500,
        color: '#134535',
        textAlign:'center',
    },
    h3_text:{
        fontSize:width >= 720 ? 25 : 20,
        fontWeight: 500,
        color: '#2b7f86ff',
    },

    container_projects:{
        alignItems: 'flex-start',
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-between',
        margin: width >= 500 ? 20 : 0,
    },
    info_ods:{
        textAlign: 'justify',
    },
    column_projects:{
        flex: 1,
        flexDirection: width >= 950 ? 'row' : 'column',
        justifyContent: width >= 950 ?'space-between' : 'center',
        alignItems: width >= 950 ?'flex-start' : 'center',
        marginVertical: 20,
        marginHorizontal: width >= 500 ? 20 : 0,
        columnGap: 20,
        rowGap: 20,
    },
    box_projects:{
        backgroundColor: '#77A135',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 200,
        width: width >= 970 ? 300 : 300 ,
        position: 'relative',
        boxShadow: '0px 4px 8px #0000005c',
    },
    ods_number:{
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 8
    },
    title_projects:{
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px #0000005c',
    },
    image:{
        height: 140,
        width: 220,
        alignSelf: 'center'
    },
})
}
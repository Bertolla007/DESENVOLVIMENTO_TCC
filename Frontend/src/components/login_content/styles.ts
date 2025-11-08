import { colors } from "@/styles/colors"
import { StyleSheet} from "react-native"
// backgroundColor: '#FAFAEE',
export const getStyles = (width:number) => {
    const isLargeScreen = width >= 650;
    
    return StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#CCE3D5',
        padding: 30,
        height:'70%',
        borderRadius:10,
        boxShadow: '0px 4px 8px #0000005c',
    },
    main_info_container:{
        marginTop: 5,
        flexDirection:'column',
        gap:15,
    },
    main_text:{
        fontSize: 50,
        fontWeight: 700,
        color: '#134535',
        marginVertical: 10,
        textAlign: 'center',
    },
    h2_text:{
        fontSize:20,
        fontWeight: 500,
        color: '#134535',
        textAlign:'center',
    },
    h3_text:{
        fontSize:17,
        fontWeight: 500,
        color: '#134535',
        textAlign:'center',
    },
    searchBar:{
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        backgroundColor: 'white'
    },
    logo:{
        height: 150,
        width: 100,  
    },
    image:{
        height: 450,
        width: 350,
        marginLeft: 40,  
    },
})
}
import { colors } from "@/styles/colors"
import { StyleSheet} from "react-native"
// backgroundColor: '#FAFAEE',
export const getStyles = (width:number) => {
    const isLargeScreen = width >= 650;
    
    return StyleSheet.create({
    container:{
        flexDirection:'column',
        alignContent: 'space-between',
        borderBottomColor: '#7d7d7dff',
        backgroundColor: '#78a1356e',
        borderBottomWidth: 2,   
    },
        green_status_bar:{
        backgroundColor: '#77A135',
        height: 25,
        width: '100%',
    },
    main_info_container:{
        marginTop: 5,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        gap:8,
    },
    searchBar:{
        width:isLargeScreen ? '55%' : '70%',
        height: 35,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#000000ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    infoLinks:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
        marginVertical: 5,
    },
    image:{
        height: 50,
        width: 35,  
    },
    infoLinks_text:{
        fontSize: 16,
        fontWeight: 400,
        opacity: 0.8,
    },
    infoLinks_text_active:{
        fontSize: 16,
        fontWeight: 700,
        color: '#1a1a1a'
    },
})
}
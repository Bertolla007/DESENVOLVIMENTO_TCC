import {colors} from '../../styles/colors'
import { StyleSheet } from 'react-native'

export const getStyles = (width:number) => {
    const isLargeScreen = width >= 650;
    return StyleSheet.create({
        container:{
            backgroundColor: '#F1FAE7',
            flex: 1,
            flexDirection: 'column',    
            justifyContent:'center',
            alignItems:'center',
            gap: 40,
            marginBottom: 40,
        },
        box_projects:{
            backgroundColor: '#FAFAEE', 
            width: width >= 1200 ? '70%' : '90%',
            padding: 20,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 15,
            boxShadow: '0px 4px 8px #0000005c',
        },
        main_text:{
            fontSize: width >= 570 ? 50 : 45,
            fontWeight: 700,
            color: '#134535',
            marginTop: 30,
            textAlign: 'center',
        },
        title_project:{
            fontSize: 40,
            fontWeight: 700,
            color: '#134535',
            textAlign: 'left',
        },
        h2_text:{
            fontSize:width >= 720 ? 20 : 16,
            fontWeight: 500,
            color: '#134535',
            textAlign:'justify',
        },
        h3_text:{
            fontSize:width >= 720 ? 25 : 20,
            fontWeight: 500,
            color: '#134535',
            textAlign:'center',
            marginHorizontal:width >= 720 ? '10%' : '5%',
        },
        see_more:{
            padding: width >= 500 ? 10 : 5,
            backgroundColor:'#77A135',
            borderRadius: 8,
            alignItems:'center',
        },
    })
}
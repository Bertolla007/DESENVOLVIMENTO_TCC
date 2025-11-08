import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from "react-native"
import { Link } from "expo-router"
import Header from "@/components/header"
import HomeInfo from "@/components/home_info"
import HomeProjects from "@/components/home_projects"
import Footer from "@/components/footer"
import HomeODS from "@/components/home_ods"

const AboutUs = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);
 return(
    <View style={styles.container}>
        <Header/>
        <ScrollView>
        <View style={styles.main_info}>
            <View style={styles.content}>
            <Text style={styles.h1_text}>SOBRE NÓS</Text>
            <Text style={styles.h2_text}>
            Nós somos participantes do Instituto Federal do Paraná (IFPR) - Campus Londrina, esta aplicação é uma proposta de desenvolvimento, com foco nos objetivos de desenvolvimento sustentável (ODS), para realização do trabalho de conclusão de curso.
            </Text>        
            <Text style={styles.h1_text}>MISSÃO</Text>
            <Text style={styles.h2_text}>
            Junto desta proposta de desenvolvimento, temos como objetivo a finalização do desenvolvimento de uma aplicação responsiva e informacional, que apresente e melhore a transparencia de projetos relacionados ao tema de sustentabilidade feitos pelos estudantes e professores dos campi dos IFPR, além de promover e permitir o contato de possíveis investidores.
            </Text>        
            <Text style={styles.h1_text}>VALORES</Text>
            <Text style={styles.h2_text}>
            Desenvolvimento sustentável{'\n'}
            Transparência de Projetos{'\n'}
            Responsabilidade social/informacional{'\n'}
            </Text>        
            </View>
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
            marginVertical: 40,
            overflowY: 'hidden'
        },
        content:{
            marginHorizontal: isBigScreen ? '20%' : '6%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 40,
        },
        h1_text:{
            fontSize: 50,
            fontWeight: 700,
            color: '#134535',
        },
        h2_text:{
        fontSize: width >= 550 ? 30 : 20,
        fontWeight: 500,
        color: '#134535',
        textAlign: width >= 550 ? 'center' : 'justify',
        },
    });
}
export default AboutUs;
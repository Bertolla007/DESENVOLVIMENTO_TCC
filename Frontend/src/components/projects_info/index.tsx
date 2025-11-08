import { View, Text, Image, TouchableOpacity, useWindowDimensions, Animated, Pressable, LayoutAnimation, } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { useRef, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { getStyles } from "./styles"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import { Link } from "expo-router"
//erro inexistente do typescript
// import IFPR_logo from "../../../assets/images/IFPR_logo.png"

const Header = () => {
    const { width } = useWindowDimensions();
    const styles = getStyles(width);

    const route = useRoute();
    const rotaAtual = route.name;

    //animação do 'ver detalhes' (demorei 2 horas pra fazer essa bomba, 
    //agora vou por comentários pra caso eu precise fazer dnv eu consiga entender q porra eu fiz)
    const [expand, setExpand] = useState(false); //valor padrão falso 
    const animatedHeight = useRef(new Animated.Value(150)).current; //valor atual

    const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); //animação do layout
    Animated.timing(animatedHeight, { //estilo da animação
      toValue: expand ? 150 : 350, // define o tamanho da expansão
      duration: 100, //no tutorial q eu vi isso fazia alguma diferença
      useNativeDriver: false, //evita exibição de erro (n sei pq caralhos, mas evita)
    }).start();
    setExpand(!expand); //muda o valor do 'expand' para true
    };

    return (
        // tem q ser animada essa view
        <Animated.View style={styles.container}> 
            <Text style={[styles.main_text,{marginHorizontal:10}]}>PROJETOS DISPONÍVEIS</Text>
            <Text style={styles.h3_text}>
                Conheça as iniciativas desenvolvidas com foco na preservação ambiental, educação sustentável e inovação social. Cada projeto tem seu objetivo relacionado a sustentabilidade promovendo diretamente a conscientização e o cuidado com o meio ambiente.
            </Text>
            <View style={styles.box_projects}>
                <Text style={styles.title_project}>
                    Sensibilização Ambiental - IFPR Astorga
                </Text>
                {/* Período */}
                <Text style={styles.h2_text}>
                    Período: 01/01/2025 - 31/12/2027
                </Text>
                {/* Área */}
                <Text style={styles.h2_text}>
                    Área: Interdisciplinar (Multidisciplinar)
                </Text>
                {/* Foco */}
                <Text style={styles.h2_text}>
                    Foco: Programa PíBEX - Modalidade Jr.
                </Text>
                {/* Tema */}
                <Text style={styles.h2_text}>
                    Tema: Meio Ambiente
                </Text>
                {/* Coordenador */}
                <Text style={styles.h2_text}>
                    Coordenador: Narciso Americo Franzin (Doutorado)
                </Text>
            {/* conteudo a mais da animação */}
            {expand && (
                <View style={{marginTop: 10}}>
                <Text  numberOfLines={30} ellipsizeMode="tail" style={styles.h2_text}>
                Resumo: Em 2022, a Assembleia Geral das Nações Unidas convocou uma nova reunião a fim de evocar ações por um planeta saudável e próspero para todos, relacionados na Governança Global do Meio Ambiente – 2022/2023, desta forma foi celebrada a Conferência de Estocolmo+50, isso ocorreu meio século depois da primeira conferência ambiental internacional: a Conferência das Nações Unidas sobre o Desenvolvimento e Meio Ambiente Humano, mais conhecida como a Conferência de Estocolmo (1972), onde foram definidos os 26 princípios e a criação do Programa das Nações Unidas para o Meio Ambiente (PNUMA). O Campus Avançado Astorga, projeto Sensibilização Ambiental, ciente que existem práticas que ocasionam a degradação ambiental e a má utilização dos recursos naturais do nosso ecossistema, compromete-se a difundir conhecimentos que possibilitem ações de práticas sustentáveis, tais como a manutenção de áreas verdes em ambientes urbanos públicos, recuperação de nascentes, utilização consciente da água, entre outras, o que favorece um espaço harmônico e vital para uma boa convivência. Para isso, alunos, professores e comunidade local e regional, se dedicam como as pessoas devem agir de forma correta para preservar o meio ambiente. Nesse sentido a escola se apresenta como sendo um local favorável ao processo holístico na educação voltada para o meio ambiente. Salamoni e Gerardi (2001) afirmam que a “responsabilidade com a sustentabilidade do processo produtivo, que vai além de sua dimensão ecológica, ou seja, uma sustentabilidade econômica, social, cultural, política e tecnológica do processo de desenvolvimento de cada local, de cada região”.  Essa atividade tem por objetivo trabalhar com os estudantes e a comunidade municipal e regional, a importância do reaproveitamento e do consumo consciente dos materiais com a finalidade de contribuirmos com o meio ambiente. O projeto será desenvolvido nas dependências do IFPR - Campus Avançado Astorga, e em locais da cidade de Astorga e Região, em consonância com a Secretaria Municipal do Meio Ambiente da cidade de Astorga, Jaguapitã e a Rádio Santuário de Astorga. Com o desenvolvimento desse projeto, espera-se que os estudantes obtenham conhecimentos teóricos e práticos relacionado a educação ambiental e convivência do ser humano com a natureza. Vale ressaltar que a participação dos alunos, nos eventos externos ao IFPR-Campus Avançado Astorga, se dará apenas com a autorização dos pais.
                </Text>
            </View>
            )}
            <View style={[{flexDirection:'row'}, {gap: 20}]}>
            {/* Botao do 'ver detalhes, com operador ternário nele pra mudança do texto */}
                <TouchableOpacity onPress={toggleExpand} style={styles.see_more}>
                    <Text style={[styles.h2_text,{color: 'white'}]}>
                        {expand ? 'Ver menos' : 'Ver detalhes'}
                    </Text>
                </TouchableOpacity>
            {/* contato por email */}
                <TouchableOpacity style={styles.see_more}>
                    <Text style={[styles.h2_text,{color:'white'}]}>
                        Entre em contato
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.box_projects}>
                <Text style={styles.title_project}>
                    Sensibilização Ambiental - IFPR Astorga
                </Text>
                {/* Período */}
                <Text style={styles.h2_text}>
                    Período: 01/01/2025 - 31/12/2027
                </Text>
                {/* Área */}
                <Text style={styles.h2_text}>
                    Área: Interdisciplinar (Multidisciplinar)
                </Text>
                {/* Foco */}
                <Text style={styles.h2_text}>
                    Foco: Programa PíBEX - Modalidade Jr.
                </Text>
                {/* Tema */}
                <Text style={styles.h2_text}>
                    Tema: Meio Ambiente
                </Text>
                {/* Resumo */}
                <Text  numberOfLines={3} ellipsizeMode="tail" style={styles.h2_text}>
                    Resumo: Projeto voltado a conscientização ambiental e manutenção de áreas verdes  em espaços públicos e escolares, promovendo sustentabilidade e engajamento social
                </Text>
                <View style={styles.see_more}>
                <TouchableOpacity>
                    <Text style={[styles.h2_text,{color: 'white'}]}>Ver detalhes</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Animated.View>     
    )}

export default Header;
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Feather, FontAwesome } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
export default function Layout(){
    return <GestureHandlerRootView>   
        <Drawer screenOptions={{headerShown: false,
            drawerActiveBackgroundColor: '#77A135',
            drawerInactiveBackgroundColor: 'transparent',
            drawerActiveTintColor: '#1a1a1a',
            drawerHideStatusBarOnOpen: true,
            drawerLabelStyle:{
              fontSize: 17,
            },
            drawerItemStyle:{
              borderRadius:0,
              marginHorizontal: 0,
            },
            drawerStyle:{
              backgroundColor: '#b0cc82ff',
              paddingTop: 20,
              gap: 10,
              flex: 1,
              
            },
            swipeEnabled: true,
        }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'overview',
          }}
        />
        <Drawer.Screen
            name="pages/available_projects" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'Projetos disponiveis',
              title: 'overview',
            }}
          />
        <Drawer.Screen
            name="pages/ODS" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'ODS',
              title: 'overview',
            }}
          />
        <Drawer.Screen
          name="pages/about_us" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Sobre nós',
            title: 'overview',
          }}
        />
            </Drawer>
           </GestureHandlerRootView> 
}
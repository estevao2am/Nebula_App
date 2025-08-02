import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppTabBar } from "./AppTabBar";
import { FavoriteScreen } from "../Screen/app/FavoriteScreen";
import { HomeScreen } from "../Screen/app/HomeScreen";
import { MyProfile } from "../Screen/app/MyProfile";
import { NewPostScreen } from "../Screen/app/NewPostScreen";

export type AppTabBottomTabParamList = {
    HomeScreen : undefined,
    MyProfile : undefined
    FavoriteScreen: undefined,
    NewPostScreen: undefined,

}

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>()

export function AppTabNavigator (){

// importando a navegacao personalizado

function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

    return (
        <Tab.Navigator 
        tabBar={renderTabBar} // Usando a tab personalizado
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
              paddingTop: 20,
            },
        }}
        >
             <Tab.Screen name="HomeScreen" component={HomeScreen}/>
             <Tab.Screen name="NewPostScreen" component={NewPostScreen}/>
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen}/>
            <Tab.Screen name="MyProfile" component={MyProfile}/>


        </Tab.Navigator>

    )
    }

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../app/tabs';
import Home from '../app/tabs/home';
import Profile from '../app/tabs/profile';

export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Index: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#151facff',
                    tabBarInactiveTintColor: '#777',
                    tabBarIcon: ({ color, size }) => {
                        const map: Record<keyof RootTabParamList, string> = {
                        Home: 'home-outline',
                        Profile: 'person-outline',
                        Index: 'grid-outline', // escolha o ícone que preferir
                        };
                        // @ts-expect-error rota é keyof RootTabParamList
                        return <Ionicons name={map[route.name]} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Index" component={Index} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
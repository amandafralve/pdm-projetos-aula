import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#777',
        tabBarIcon: ({ color, size }) => {
          const icons: Record<'home' | 'profile' | 'index', 'home-outline' | 'person-outline' | 'grid-outline'> = {
            home: 'home-outline',
            profile: 'person-outline',
            index: 'grid-outline',
          };
          return <Ionicons name={icons[route.name as 'home' | 'profile' | 'index']} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="index" />
    </Tabs>
  );
}

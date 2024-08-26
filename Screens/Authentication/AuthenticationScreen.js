import { View } from "react-native"
import Login from "../../Components/Authentication-Page/Login"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SignUp from "../../Components/Authentication-Page/Signup";

const AuthenticationScreen = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'login') {
                    iconName = focused
                        ? 'login-variant'
                        : 'login';
                } else if (route.name === 'signup') {
                    iconName = focused ? 'account-arrow-right' : 'account-arrow-right-outline';
                }

                // You can return any component that you like here!
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#FFAF45',
            tabBarInactiveTintColor: '#FFDD95',
        })} >
            <Tab.Screen name="login" component={Login}></Tab.Screen>
            <Tab.Screen name="signup" component={SignUp}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default AuthenticationScreen
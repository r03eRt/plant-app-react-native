import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { PlantDetail } from "./screens/PlantDetail";
// extra screens
import { Tabs } from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

export const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} screenOptions={{ headerShown: false }}/>

                {/* Screens */}
                <Stack.Screen name="PlantDetail" component={PlantDetail} screenOptions={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

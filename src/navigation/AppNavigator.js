import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuizScreen from "../screens/QuizScreen";
import ResultsScreen from "../screens/ResultScreen";
import FlagScreen from "../screens/FlagScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Quiz" 
                component={QuizScreen} 
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Results"
                component={ResultsScreen}
                options={{ headerShown: false }}
                listeners={({navigation}) => ({
                    beforeRemove: (e) => {
                        if(e.data.action.type === 'POP') {
                            e.preventDefault();
                            navigation.navigate('Quiz');
                        }
                    }
                })}
            />
            <Stack.Screen
                name="Flag"
                component={FlagScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
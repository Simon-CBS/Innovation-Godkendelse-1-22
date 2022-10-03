import * as React from "react";
import Categories from "./Categories";
import Makeup from "./StackScreens/Makeup";
import Hair from "./StackScreens/Hair";
import { createStackNavigator } from '@react-navigation/stack';

//Navigatoren oprettes
const MainStack = createStackNavigator()


/*
Komponenter til stacken oprettes
Indbyggede funktioner kaldes på MainStack, som bl.a. giver skærmene navne og
muglighed for at style udseende på "overskriften" i toppen af hvert view.

Her specificeres at Categories er det view som brugeren starter på, når de åbner appen.
Når der senere hen er mulighed for login, skal denne naturligvis komme først.
 */

function StackNavigation() {
    return (
            <MainStack.Navigator initialRouteName="Categories">
                <MainStack.Screen
                    name="Categories"
                    component={Categories}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitleStyle: {color: 'black'},
                        headerStyle: {backgroundColor: 'white'}}}
                />
                <MainStack.Screen name="Makeup" component={Makeup}
                        options={{
                        headerTitleStyle: { textAlign: 'right', color: 'black' },
                        headerStyle: {backgroundColor: 'white'}}}
                />
                <MainStack.Screen name="Hair" component={Hair}
                         options={{
                         headerTitleStyle: { textAlign: 'right', color: 'black' },
                         headerStyle: {backgroundColor: 'white'}}}
                />

            </MainStack.Navigator>
    )
}
export default StackNavigation



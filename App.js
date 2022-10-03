import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import StackNavigation from "./components/StackNavigation";
import { NavigationContainer } from '@react-navigation/native';
import firebase from "firebase/compat";


//Configuration af databasen, som ikke bliver brugt på nuværende tidspunkt
const firebaseConfig = {
  apiKey: "AIzaSyBlEqpbNOwUovu1_dJcEh3Heyp9B2Z2zc0",
  authDomain: "myproject-94608.firebaseapp.com",
  databaseURL: "https://myproject-94608-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myproject-94608",
  storageBucket: "myproject-94608.appspot.com",
  messagingSenderId: "763695792697",
  appId: "1:763695792697:web:b68ae1022aa0716f1dc3e8"
};

//databasen initialiseres
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

/*App henviser bare til stacknavigation, som håndterer navigationen mellem de nuværende views
Det indrammes i en navigationcontainer for at gøre navigationen mulig
 */
const App = () => {
  return (
    <NavigationContainer>
        <StackNavigation/>
    </NavigationContainer>
  );
}

export default App;




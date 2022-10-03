import * as React from "react";
import {ImageBackground, StyleSheet, Text, Button, View} from "react-native";


/*Bruger den indbyggede "navigate" funktion og gør det muligt at navigere
til det sted som specificeres i argument #2 (route)
*/
const navigationControl = (navigation, route) => {
    navigation.navigate(route);
}

/*
Her opbygges hele sidens layout.
En overordnet container som indeholder containere til henholdsvis
det øverste af skærmen og knapperne nederst som er placeret i en grid-stil.

Hvert view i griddet indeholder en knap og et billede.
Mulig forbedring til fremtiden er måske at have tekst hen over billedet, og
fjerne knappen og gøre billedet til det som linker videre (Standard i de fleste apps)
Knapperne lige nu bruger telefonens native visning og er derfor ikke ens for alle brugere.

Da skærmen ikke skal dækkes fuldstændig af knapper, er der ledig plads i toppen til
andre ting som vi gerne vil vise på startskærmen.

*/

function Categories({navigation}) {
    return (
        <View style={styles.Container}>
            <View style={styles.headerContainer}>
                <Text>Her er plads til reklamer, ting til inspiration</Text>
                <Text>eller promoverede udbydere?</Text>
            </View>
            <Text style={styles.caption}>Vælg behandlingstype</Text>
            <View style={[styles.gridContainer, {
                flexDirection: "row"
            }]}>
                <View style={[styles.button, { flex: 1 }]}>
                    <Button title="Makeup" onPress={() =>
                        navigationControl(navigation, "Makeup")} />
                    <ImageBackground source={require("../assets/MakeUp.png")}
                                     resizeMode="cover" style={styles.image}/>
                </View>
                <View style={[styles.button, { flex: 2 }]}>
                    <Button title="Hair" onPress={() =>
                        navigationControl(navigation, "Hair")} />
                    <ImageBackground source={require("../assets/Hair.png")}
                                     resizeMode="cover" style={styles.image}/>
                </View>
                <View style={[styles.button, { flex: 3 }]}>
                    <Button title="Kategori" onPress={() =>
                        navigationControl(navigation, "")} />
                    <ImageBackground source={require("../assets/kategoriplaceholder.png")}
                                     resizeMode="cover" style={styles.image}/>
                </View>
                <View style={[styles.button, { flex: 4 }]}>
                    <Button title="Kategori" onPress={() =>
                        navigationControl(navigation, "")} />
                    <ImageBackground source={require("../assets/kategoriplaceholder.png")}
                                     resizeMode="cover" style={styles.image}/>
                </View>
                <View style={[styles.button, { flex: 5 }]}>
                    <Button title="Kategori" onPress={() =>
                        navigationControl(navigation, "")} />
                    <ImageBackground source={require("../assets/kategoriplaceholder.png")}
                                     resizeMode="cover" style={styles.image}/>
                </View>
                <View style={[styles.button, { flex: 6 }]}>
                    <Button title="Kategori" onPress={() =>
                        navigationControl(navigation, "")} />
                    <ImageBackground source={require("../assets/kategoriplaceholder.png")}
                                     resizeMode="cover" style={styles.image}/>
                </View>
            </View>
        </View>

    )
}

export default Categories


const styles = StyleSheet.create({
    Container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9ba39d",
    },
    headerContainer: {
        minHeight: 200,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    caption: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    gridContainer: {
        height: "80%",
        width: "100%",
        flex: 1,
        padding: 10,
        backgroundColor: "#bad4e0",
        flexDirection: "row",
        flexWrap: "wrap",

    },

    button: {
        height: "25%",
        width: "20%",
        minWidth: "30%",
        maxWidth: "48%",
        borderColor: "black",
        borderWidth: 2,
        margin: 5,
        color: "black",
    },
    image: {
        flex: 1,
    },
});

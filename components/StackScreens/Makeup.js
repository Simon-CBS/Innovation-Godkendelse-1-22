import * as React from "react"
import {Image, StyleSheet, ScrollView, Text, View} from "react-native"

/*
Kan kun navigeres til fra knappen "makeup" på categories siden
Der bruges ScrollView til at lave en list over udbydere af makeup-styling
Hvert item i listen har et billede og tilhørende tekst.
Senere hen skal billedet selvfølgelig være valgt af udbyderen selv,
og teksten skal kort beskrive navn mm.

Både tekst og beskrivelse skal hentes fra databasen så siden genereres
stort set udelukkende med data fra databasen.

Hver udbyder skal være link til en mere detaljeret side om dem med meget mere info
og mulighed for bestilling af tid.

 */

const Makeup = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Klik på udbyder og hør nærmere</Text>

            <ScrollView style={styles.list}>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 1</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 2</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 3</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 4</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 5</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 6</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 7</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 8</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 9</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 10</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 11</Text>
                </View>
                <View style={styles.listItem}>
                    <Image source={require("../../assets/udbyderplaceholder.png")}
                           style={styles.image} />
                    <Text>Udbyder 12</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Makeup;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bad4e0",
    },
    list: {
        height: "100%",
        width: "80%",
        paddingTop: 5,

    },
    listItem: {
        marginTop: 30,
        fontSize: 2,
        padding: 5,
        width: "100%",
        flexDirection: "row",
    },
    image: {
        flex: 1,
        maxWidth: 30,
        maxHeight: 30,
        margin: 5,
    }
});

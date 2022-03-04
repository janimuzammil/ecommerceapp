import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react';
import Data from "./api";

const details = ({ navigation, route }) => {
    const id = route.params.detailsid;

    const selecteddetails = Data.find((elements) => id === elements.id);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: item.image }} resizeMode="contain" />
            </View>

            <View style={styles.details}>
                <Text style={styles.heading}>{selecteddetails.itemnam}</Text>
                <Text style={styles.pera}>{selecteddetails.label}</Text>
                <Text style={styles.discription}>{selecteddetails.discription}</Text>

                <View style={styles.morepic}>
                    <Image style={styles.img} source={{ uri: item.image }} resizeMode="contain" />
                    <Image style={styles.img} source={{ uri: item.image1 }} resizeMode="contain" />
                    <Image style={styles.img} source={{ uri: item.image2 }} resizeMode="contain" />
                    <Image style={styles.img} source={{ uri: item.image3 }} resizeMode="contain" />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.prise}>{selecteddetails.prise}</Text>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebebeb",
        width: "100%",
    },
    image: {
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    card: {
        width: "100%",
        height: "40%",
    },
    details: {
        backgroundColor: "#fff",
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 7,
    },
    pera: {
        marginBottom: 10,
        color: "#fe7466",
        fontWeight: "bold",
        marginBottom: 20,
    },
    discription: {
        lineHeight: 22,
    },
    morepic: {
        width: "100%",
        flexDirection: "row",
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 5,
        margin: 5,
        alignSelf: "center",
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "#fe7466",
        padding: 10,
        width: 150,
        borderRadius: 20,
        position: "absolute",
        right: 0, 
    },
    btntext:{
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
    },
    prise:{
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        position: "absolute",
        left: 0, 
    },
    footer:{
        marginTop: 100,
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
})

export default details

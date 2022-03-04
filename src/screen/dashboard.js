import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { Center } from "native-base";
import { Data, Ganer } from "./api";

const dashboard = ({navigation}) => {

    const [userdata, myUserData] = useState();
    const [isloading, setLoading] = useState();

    // const handlebtn = () => {
    //    navigation.navigate('Details')
    // };

    // useEffect(() => {
    //     getuserData();
    // }, []);

    // const getuserData = async () => {
    //     try {
    //         const response = await fetch("https://hiflix.fun/jazz_tv/api.json");
    //         const myData = await response.json();
    //         myUserData(myData);
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Center style={style.container}>
            <View>


                <View style={style.view}>
                    <TextInput style={style.searchbar} placeholder="Seatch Here..." />
                    <TouchableOpacity style={style.btn}>
                        <Icon
                            name='menu'
                            color='#fe7466'
                        />
                    </TouchableOpacity>
                </View>

                <View style={style.ganer}>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                        data={Ganer} renderItem={({ item }) => {
                            return (
                                <View style={style.container2}>
                                    <TouchableOpacity style={style.textbg}>
                                        <Text style={style.text}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>

                <View style={style.listcard}>
                    <FlatList data={Data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={style.card}>
                                    <Image style={style.cardimg} source={{ uri: item.image }} resizeMode="contain" />
                                    <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                        <Text style={style.title}>{item.itemnam}</Text>
                                        <Text style={style.label}>{item.label}</Text>
                                        <Text style={style.discription}>Ergonimical From Human Body Cover</Text>
                                        <Text style={style.prise}>{item.prise}</Text>

                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}
                                            style={style.buy}>
                                            <Text style={style.text}>Buy</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>

            </View>

        </Center>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#ebebeb",
        display: "flex",
        width: "150%",
        marginLeft: -90,
        paddingBottom: 10,
    },
    view: {
        margin: 10,
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        marginTop: 50
    },
    searchbar: {
        borderWidth: 1,
        borderColor: "#d4d4d4",
        borderRadius: 10,
        width: "60%",
        margin: 0,
        padding: 3,
        color: "#d4d4d4",
    },
    btn: {
        width: 50,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 8,
        position: "absolute",
        right: 0,
        padding: 15
    },
    container2: {
        position: "relative",
        padding: 10,
        display: "flex",
        flexDirection: "row"
    },
    textbg: {
        backgroundColor: "#fe7466",
        padding: 10,
        borderRadius: 20,
        width: 70,
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    ganer: {
        position: "absolute",
        top: 90,
    },
    card: {
        backgroundColor: "#fff",
        flexDirection: "row",
        marginTop: 10,
        padding: 5,
    },
    listcard: {
        position: "relative",
        marginTop: 40,
        padding: 5
    },
    cardimg: {
        width: 100,
        height: 100,
        padding: 20,
    },
    title: {
        color: "#fe7466",
        fontSize: 17,
    },
    label: {
        fontSize: 13,
        fontWeight: "bold",
    },
    discription: {
        marginTop: 5,
        maxWidth: 140,
    },
    prise: {
        color: "#fe7466",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 5
    },
    buy: {
        backgroundColor: "#fe7466",
        borderRadius: 20,
        padding: 5,
        position: "absolute",
        top: "65%",
        right: -60,
        width: 60,
    }

})

export default dashboard;
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ArrowUpIcon, ArrowDownIcon } from "native-base";
import { style } from '@mui/system';

class App extends React.Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <LinearGradient
                        colors={['#fe9185', '#fd7365', '#d75345']}
                        style={styles.linearGradient}
                        start={{ x: 0.7, y: 0 }}>

                        <View style={styles.div}>
                            <Text style={styles.text}>64000</Text>
                            <Text style={styles.rup}>PKR</Text>
                        </View>

                        <View style={styles.div2}>
                            <Image style={{ width: 60, height: 60 }} source={require('../image/chip.png')} />
                        </View>

                        <View style={styles.div3}>
                            <Text style={{ color: "#fff", fontSize: 18, }}>Muzmamil</Text>
                        </View>

                    </LinearGradient>
                </View>

                <View style={{ position: "relative" }}>
                    <Text style={{ color: "#000", fontSize: 18, marginLeft: 10, }}>Recent Transactions</Text>
                    <Text style={{ color: "#c7c8ca", textAlign: "center", fontSize: 15, marginTop: 18 }}>Today</Text>
                </View>

                <View style={styles.trans}>
                    <View style={styles.arrowbg}>
                        <ArrowUpIcon size="5" textAlign="center" color="#fff" />
                    </View>
                    <Text style={styles.head}>Lorem Ipsum</Text>
                    <Text style={styles.pera}>1 June 2022</Text>
                    <Text style={styles.rate}>-1800 Rs</Text>
                </View>

                <View style={styles.trans}>
                    <View style={styles.arrowbg}>
                        <ArrowUpIcon size="5" textAlign="center" color="#fff" />
                    </View>
                    <Text style={styles.head}>Lorem Ipsum</Text>
                    <Text style={styles.pera}>1 June 2022</Text>
                    <Text style={styles.rate}>-1800 Rs</Text>
                </View>

                <View style={styles.trans}>
                    <View style={styles.arrowbg}>
                        <ArrowDownIcon size="5" textAlign="center" color="#fff" />
                    </View>
                    <Text style={styles.head}>Lorem Ipsum</Text>
                    <Text style={styles.pera}>1 June 2022</Text>
                    <Text style={styles.rate2}>+1800 Rs</Text>
                </View>

                <View style={styles.trans}>
                    <View style={styles.arrowbg}>
                        <ArrowUpIcon size="5" textAlign="center" color="#fff" />
                    </View>
                    <Text style={styles.head}>Lorem Ipsum</Text>
                    <Text style={styles.pera}>1 June 2022</Text>
                    <Text style={styles.rate}>-1800 Rs</Text>
                </View>

                <View style={styles.trans}>
                    <View style={styles.arrowbg}>
                        <ArrowDownIcon size="5" textAlign="center" color="#fff" />
                    </View>
                    <Text style={styles.head}>Lorem Ipsum</Text>
                    <Text style={styles.pera}>1 June 2022</Text>
                    <Text style={styles.rate2}>+1800 Rs</Text>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 200,
        width: 350,
        shadowColor: "#000",
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    rup: {
        color: "#fff",
        fontSize: 20,
        textAlign: "left",
        fontWeight: "bold"
    },
    div: {
        position: "absolute",
        left: 30,
        top: 30,
    },
    div2: {
        position: "absolute",
        right: 40,
        top: 30,
    },
    div3: {
        position: "absolute",
        left: 40,
        bottom: 30,
    },
    arrowbg: {
        padding: 10,
        backgroundColor: "#ff6969",
        width: 40,
        height: 40,
        borderRadius: 50,
        textAlign: "center",
    },
    trans: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignSelf: "center",
        width: "95%",
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 12,
    },
    head: {
        color: "#000",
        marginLeft: 10,
    },
    pera: {
        position: "absolute",
        bottom: 15,
        left: 60,
        color: "#c7c8ca",
    },
    rate: {
        position: "absolute",
        right: 30,
        top: 20,
        color: "#ff5959"
    },
    rate2: {
        position: "absolute",
        right: 30,
        top: 20,
        color: "#3bc84c",
    }
})
export default App
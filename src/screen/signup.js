import React, { useState } from "react";
import { Input, Stack, Center, View, ArrowForwardIcon, Checkbox } from "native-base";
import { StyleSheet, TouchableOpacity, Text, Image, CheckBox } from "react-native";



const Signup = ({ navigation }) => {

    const [nameError, setNamError] = useState('');
    const [userNam, setUserNam] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [rePasssword, setrepassword] = useState('');

    const handlesignup = () => {
        if (userNam == "") {
            alert("Please Enter Your Name");
        }
        else if (email == "") {
            alert("Please Enter Your Email");
        }
        else if (password == "") {
            alert("Please Enter Your Password");
        }
        else if (rePasssword == "") {
            alert("Please Reconfirm Password");
        }
        else {
            navigation.navigate('Dashboard')
        }
    };

    return (
        <Center style={style.container}>

            <Image style={style.img} source={require('../image/img2.png')} />

            <View style={style.containerhead}>
                <Text style={style.heading}>Register</Text>
                <Text style={style.texthaed}>Signup To Continue</Text>
            </View>

            <View style={style.container2}>
                <Center>
                    <Stack space={4} w="100%" maxW="300px">
                        <Input color="#fe7466" onChangeText={text => setUserNam(text)} variant="underlined" placeholder="Name" />
                        <Input color="#fe7466" onChangeText={text => setemail(text)} variant="underlined" placeholder="Email" />
                        <Input color="#fe7466" onChangeText={text => setPassword(text)} variant="underlined" secureTextEntry={true} placeholder="Password" />
                        <Input color="#fe7466" onChangeText={text => setrepassword(text)} variant="underlined" secureTextEntry={true} placeholder="Comfirm Password" />

                        <View style={style.checkboxContainer}>
                            <Checkbox color="#fe7466" style={style.checkbox} />
                            <Text style={style.label}>i agree to tream and condiction</Text>
                        </View>

                        {/* {setNamError !== "" && <View style={style.alert}>
                            <Text style={style.alerttext}>{nameError}</Text>
                        </View>} */}
                    </Stack>

                    <View style={style.container3}>

                        <Text style={style.sign}>SIGN UP</Text>

                        <TouchableOpacity onPress={handlesignup} style={style.btn}>
                            <ArrowForwardIcon size="5" mt="0.5" marginLeft="05" color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={style.container4}>

                        <Text style={style.logintext}>
                            or login using social media
                        </Text>

                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Login')} style={style.signuntext}>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>

                </Center>

            </View>
        </Center>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#ebebeb",
        width: "100%",
        height: "100%"
    },
    heading: {
        color: "#fe7466",
        fontSize: 30,
        fontWeight: "bold",
    },
    texthaed: {
        textAlign: "center"
    },
    containerhead: {
        position: "relative",
        marginTop: 0,
        marginBottom: 15,
    },
    container2: {
        backgroundColor: "#fff",
        width: "90%",
        height: "65%",
        borderRadius: 20,
        padding: 10,
    },
    container3: {
        width: "90%",
        position: "relative",
        marginTop: 5,
    },
    btn: {
        backgroundColor: "#fe7466",
        padding: 10,
        width: 80,
        borderRadius: 20,
        position: "absolute",
        top: 10,
        right: 10,
    },
    sign: {
        fontSize: 25,
        fontWeight: "bold",
        position: "absolute",
        top: 20,
        color: "#000"
    },
    arrow: {
        color: "#fff",
        fontSize: 1,
        marginLeft: 20,
    },
    img: {
        width: 120,
        height: 120
    },
    container4: {
        position: "relative",
        marginTop: 80,
    },
    logintext: {
        position: "absolute",
        right: 20
    },
    signuntext: {
        position: "relative",
        left: 90,
        top: 20,
        fontWeight: "bold",
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    password: {
        position: "absolute",
        bottom: -120,
        color: "#fe7466",
        textDecorationLine: 'underline',
        fontWeight: "bold"
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    label: {
        alignSelf: "center",
        marginLeft: 5,
    },
    alert: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        padding: 3,
        backgroundColor: "#fbdadf",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#ff98a9",
        textAlign: "center",
    },
    alerttext: {
        color: "#7b2432",
        textAlign: "center"
    },
    checkbox:{
        width: 15,
        height: 15,
        color: "#fe7466",
    }
})

export default Signup
import React, { useState } from "react";
import { Input, Stack, Center, View, ArrowForwardIcon } from "native-base";
import { StyleSheet, TouchableOpacity, Text, Image, TextInput } from "react-native";
import { Button, Modal, VStack, HStack, } from "native-base";
import { padding } from "@mui/system";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // modal states
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    // forget
    const [forgetemail, setForgetEmail] = useState('');
    const [ottpcode, setOttpcode] = useState('');

    const handlelogin = () => {
        if (email == "", password == "") {
            alert("your email and password incorrect");
        }
        else {
            navigation.navigate('Dashboard')
        };
    };

    const forgetpassword = () => {
        alert("aba passsword bhol gya tu");
    }


    return (
        <Center style={style.container}>

            <Image style={style.img} source={require('../image/img.png')} />

            <View style={style.containerhead}>
                <Text style={style.heading}>Welcome Back</Text>
                <Text style={style.texthaed}>Signin To Continue</Text>
            </View>

            <View style={style.container2}>
                <Center>
                    <Stack space={4} w="100%" maxW="300px">
                        <Input onChangeText={text => setEmail(text)} variant="underlined" placeholder="Email" />
                        <Input onChangeText={text => setPassword(text)} variant="underlined" secureTextEntry={true} placeholder="Password" />
                    </Stack>

                    <View style={style.container3}>

                        <Text style={style.sign}>SIGN IN</Text>

                        <TouchableOpacity onPress={handlelogin} style={style.btn}>
                            <ArrowForwardIcon size="5" mt="0.5" marginLeft="05" color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={style.container4}>

                        <Text style={style.logintext}>
                            or login using social media
                        </Text>

                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Signup')} style={style.signuntext}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        {/* {setNamError !== "" && <View style={style.alert}>
                            <Text style={style.alerttext}>{nameError}</Text>
                        </View>} */}

                    </View>

                    <TouchableOpacity style={style.forgetbtn}>
                        <Center>
                            <Text onPress={() => setShowModal(true)} style={style.password}>
                                Forget Password
                            </Text>
                        </Center>
                    </TouchableOpacity>

                </Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                    <Modal.Content maxWidth="450">
                        <Modal.CloseButton />
                        {/* <Modal.Header>Forget Password</Modal.Header> */}
                        <Modal.Body>
                            <VStack space={3}>
                                <Text style={style.passwordhead}>Forget Password</Text>
                                <HStack alignItems="center" justifyContent="space-between">
                                    <Text style={style.passwordtext} fontWeight="medium">Enter Your Email To Get Verification Code.</Text>
                                </HStack>
                                <Input onChangeText={(text) => setForgetEmail(text)} variant="underlined" placeholder="Email" />
                            </VStack>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button background="#fe7466" flex="1" onPress={() => {                                

                                if(forgetemail == ""){
                                    alert("Enter Your Verficiation Eamil")
                                }
                                else(
                                    setShowModal2(true)
                                    // setShowModal(false)
                                );
                            }}>
                                Submint
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>

                <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
                    <Modal.Content maxWidth="350">
                        <Modal.CloseButton />

                        <Modal.Body>
                            <Text style={style.passwordhead}>OTP</Text>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text style={style.passwordtext} fontWeight="medium">Please Enter The Code That Was Sand To Your Via Email</Text>
                            </HStack>
                            <View style={{ display: "flex", flexDirection: "row", padding: 10, }}>
                                <TextInput onChangeText={(text) => setOttpcode(text)} style={style.forgetinput} variant="underlined" />
                                <TextInput onChangeText={(text) => setOttpcode(text)} style={style.forgetinput} variant="underlined" />
                                <TextInput onChangeText={(text) => setOttpcode(text)} style={style.forgetinput} variant="underlined" />
                                <TextInput onChangeText={(text) => setOttpcode(text)} style={style.forgetinput} variant="underlined" />
                            </View>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button background="#fe7466" flex="1" onPress={() => {
                                if(ottpcode == ""){
                                    alert("Enter Your Verficiation Code")
                                }
                                else(
                                    setShowModal3(true),
                                    setShowModal2(false)
                                );
                            }}>
                                Submint
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>

                <Modal isOpen={showModal3} onClose={() => setShowModal3(false)} size="lg">
                    <Modal.Content maxWidth="350">
                        <Modal.CloseButton />

                        <Modal.Body>
                            <Text style={style.passwordhead}>Reset Password</Text>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text style={style.passwordtext} fontWeight="medium">Reset Your Passwod To Recover & login To Your Account.</Text>
                            </HStack>
                            <Input style={style.forgetinput} variant="underlined" placeholder="Passwod" />
                            <Input style={style.forgetinput} variant="underlined" placeholder="New Passwod" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button background="#fe7466" flex="1" onPress={() => {
                                setShowModal4(true);
                                setShowModal3(false);
                            }}>
                                Submint
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>

                <Modal isOpen={showModal4} size="lg" onClose={() => setShowModal4(false)}>
                    <Modal.Content maxWidth="350">
                        <Modal.CloseButton />
                        <Modal.Body>
                            <Image style={{width: 75, height: 75 , marginLeft: "auto", marginRight: "auto", marginTop: 10}} source={require("../image/success.png")} />
                            <Text style={style.passwordhead}>Success</Text>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text style={style.passwordtext} fontWeight="medium">Your Password Has Been Reast.</Text>
                            </HStack>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button background="#fe7466" flex="1" onPress={() => {
                                setShowModal(false);
                                setShowModal2(false);
                                setShowModal3(false);
                                setShowModal4(false);
                            }}>
                                Submint
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
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
        marginTop: 10,
        marginBottom: 15,
    },
    container2: {
        backgroundColor: "#fff",
        width: "90%",
        height: "50%",
        borderRadius: 20,
        padding: 10,
    },
    container3: {
        width: "90%",
        position: "relative",
        marginTop: 20,
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
        bottom: -100,
        color: "#fe7466",
        textDecorationLine: 'underline',
        fontWeight: "bold"
    },
    passwordtext: {
        textAlign: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    passwordhead: {
        textAlign: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 20,
        color: "#fe7466"
    },
    forgetinput: {
        backgroundColor: '#ebebeb',
        width: 50,
        fontSize: 15,
        marginLeft: 7,
        borderRadius: 20,
        textAlign: "center",
    },
    alert: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        width: "80%",
        padding: 5,
        backgroundColor: "#fbdadf",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#ff98a9",
        textAlign: "center",
    },
    alerttext: {
        color: "#7b2432",
        textAlign: "center"
    }
})

export default Login
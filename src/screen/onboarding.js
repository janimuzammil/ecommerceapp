import {Button, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./login";
import Signup from "./signup";
import Dashboard from "./dashboard";
import Details from "./itemdetails";

const WithCTA = ({ navigation }) => (
  <Onboarding
    showDone={false}
    onSkip={() => navigation.navigate('Login')}
    pages={[
      {
        title: 'Explore Products',
        subtitle: 'Lorem ipsum dolor sit mmet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore namfer aliquam erat volutpat.',
        backgroundColor: '#fe7466',
        image: <Image style={{width:180, height:180}} source={require('../image/shopping1.png')} />,
      },
    {
        title: 'Easy Payemnt',
  subtitle: 'easypaisa is more than just money transfer. With the latest easypaisa app you can order your own easypaisa debit card. You can also recharge your phone, pay utility bills, send gifts, win rewards,',
    backgroundColor: '#fe7466',
    image: <Image style={{width:280, height:180}} source={require('../image/shopping2.png')} />,
      },
{
  title: 'Fast Delivery',
    subtitle: 'So who came out on top? UberEats, which turned in a time nearly five minutes faster than the rest of the competition: 35 minutes, 31 seconds. Postmates came in second at 40 minutes, 12 seconds. DoorDash had an average delivery time of 42 minutes, 1 second.',
      backgroundColor: '#fe7466',
      image: <Image style={{width:300, height:180}} source={require('../image/shopping3.png')} />,
      },
{
  title: "Get Start",
    subtitle: (
      <Button
        title={'Go To Home Screen'}
        containerViewStyle={{ marginTop: 20 }}
        backgroundColor={'white'}
        borderRadius={5}
        textStyle={{ color: '#003c8f' }}
        onPress={() => navigation.navigate('Login')}
      />
    ),
      backgroundColor: '#fe7466',
        // image: (
        //   <Icon name="rocket" type="font-awesome" size={100} color="white" />
        // ),
      },
    ]}
/>
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={WithCTA} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



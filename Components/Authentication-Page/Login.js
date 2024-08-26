import LottieView from "lottie-react-native"
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Email from "./Provider/Email"
import { useState } from "react"

const Login = () => {
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState('')

    const getEmail = (e) =>
    {
        setEmail(e.target.value)
    }
    const getPass = (e) => 
    {
        setPass(e.target.value) 
    } 

    console.log(email, pass);
    
    return (
        <View style={styles.loginContainer}>
            {/*             <LottieView style={styles.anmView} source={require("../../assets/Animation - 1724438785485.json")} autoPlay loop></LottieView> */}
            <Image style={styles.img} source={require('../../assets/pix1.jpg')} />
            <Email type="signIn" emailChange = {getEmail}  passChange= {getPass}></Email>
            <View style={styles.btn}>
                <Pressable android_ripple={{ color: '#eee' }}>
                    <Text>Sign In</Text>
                </Pressable>
            </View>


        </View>
    )


}

export default Login

const styles = StyleSheet.create(
    {
        loginContainer:
        {
            marginVertical: '10%',
            alignItems: 'center',
            padding: '5%',
            justifyContent: 'center'
        },
        anmView:
        {
            flex: 1,
            width: 500,
            height: 500,
        },
        img:
        {
            width: 300,
            height: 300,
            marginBottom: "5%"
        },

        btn:
        {
            backgroundColor: '#FB773C',
            width: 150,
            height: 40,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center'
        }

    })
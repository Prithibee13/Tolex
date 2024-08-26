import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Email from "./Provider/Email"

const SignUp = () =>
{
    return(
        <View style={Styles.signUpContainer}>
            <Image style={Styles.img} source={require("../../assets/pix2.png")}></Image>
            <Email type="signUp"></Email>
            <View style={Styles.btn}>
                <Pressable android_ripple={{ color: '#eee' }}>
                    <Text>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp

const Styles = StyleSheet.create({
    img:
    {
        width: 300,
        height: 300,
        marginBottom: "5%"
    },
    signUpContainer:
    {
        marginVertical: '10%',
        alignItems: 'center',
        padding: '5%',
        justifyContent: 'center'
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
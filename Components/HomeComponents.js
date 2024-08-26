import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import pix2 from "../assets/pix2.jpg"
import LottieView from "lottie-react-native"
import anm from "../assets/1724260303066.json"
const HomeComponents = (props) => {
    const { navigation } = props
    
    const press = () => {
        navigation.navigate('Authentication')
    }
    return (
        <View style={styles.HomeContainer}>
            <Text style={styles.Title}>Tolex</Text>
            <LottieView style={styles.anmStyle} source={require("../assets/Animation - 1724413504451.json")} autoPlay loop></LottieView>

{/* 
            <Image style={styles.homeImage} source={require('../assets/pix2.jpg')} /> */}
  
            <Text style={styles.subTitle}>Not Hold The Time, Hold The World</Text>
            <View style={styles.NextPage}>
                <Pressable android_ripple={{ color: '#eee' }} onPress={press} >
                    <View style={styles.nextCOntainer}>
                        <Text style={styles.nextText}>Let's Start</Text>
                    </View>
                </Pressable>
            </View>

        </View>
    )
}

export default HomeComponents

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        alignItems: 'center',
        padding: '10%',
    },

    NextPage:
    {
        width: 150,
        height: 50,
        backgroundColor : '#FF8343',
        padding : '2%',
        
    },

    anmStyle : {
        flex : 1,
        width : 400,
        height : 400
    },

    Title:
    {
        marginVertical: '20%',
        fontWeight: 'bold',
        fontSize: 50,
        color: "#FF8225"
    },
    subTitle:
    {
        fontWeight: '600',
        fontSize: 25,
        color: '#FB773C',
        marginVertical: '10%'
    },
    homeImage:
    {
        width: "100%",
        height: '50%'
    },
    nextText : 
    {
        textAlign : 'center',
        color : '#fff',
        fontWeight :'bold',
        fontSize : 20
    }



})
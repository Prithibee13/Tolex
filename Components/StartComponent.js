import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const StartComponents = (props) => {

    const { navigation } = props

    const press = () => {
        navigation.navigate('Products')
    }
    return (
        <View style={Styles.startContainer}>
            <Image style={Styles.StartImage} source={require('../assets/pix3.jpg')}></Image>
            <Text style={Styles.subTitle}>Buy Next Genration Watches From Here</Text>
            <View style={Styles.NextPage}>
                <Pressable android_ripple={{ color: '#eee' }}  onPress={press}>
                    <View style={Styles.nextContainer}>
                        <Text style={Styles.nextText}>Let's Start</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default StartComponents


const Styles = StyleSheet.create(
    {
        startContainer: {
            alignItems: 'center',
            padding : "10%"
        },
        StartImage:
        {
            marginVertical: '10%',
            width: '70%',
            height: '60%',
            resizeMode: 'stretch',
        },

        NextPage:
        {
            width: 150,
            height: 50,
            backgroundColor: '#FF8343',
            padding: '2%',

        },
        nextText:
        {
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20
        },
        subTitle:
        {
            fontWeight: 'bold',
            fontSize: 25,
            color: '#FB773C',
            marginVertical: '5%',
            textAlign : 'center'
        },
    }
)
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

const Product = (props) => {
    const { items } = props


    const { color, name, img, detailes, price } = items

    const [heart, setHeart] = useState('hearto')
    const [loveColor, setLoveColor] = useState('#000')

    const love = () => {
        if (heart === 'hearto') {
            setHeart('heart')
            setLoveColor('#ED2B2A')
        }

        else {
            setHeart('hearto')
            setLoveColor('#000')
        }

    }

    return (
        <View style={[styles.watchContainer, { backgroundColor: color }]}>
            <View style={styles.nContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.watchImg} source={{ uri: img }}></Image>
                </View>
                <View>
                    <View style={styles.iconContainer}>
                        <Pressable android_ripple={{ color: '#eee' }} onPress={love}>
                            <AntDesign name={heart} size={30} color={loveColor} />
                        </Pressable>
                    </View>

                    <Text style={styles.title}>{name}</Text>

                    <Text style={styles.price}>${price}</Text>

                    <Text style={styles.detailes}>{detailes}</Text>
                </View>
            </View>

        </View>


    )
}

export default Product

const styles = StyleSheet.create({
    watchContainer:
    {
        paddingHorizontal: "5%",
        marginVertical: '5%',
        elevation: 5,
        borderRadius: 15,
        paddingVertical: "2%",
        width : '100%'
    },
    watchImg:
    {
        width: 150,
        height: 150,
        borderRadius: 15,
    },
   
    nContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%'
    },
    title:
    {

        fontSize: 20
    },
    price:
    {
        fontWeight: 'bold',
        fontSize: 25
    },
    detailes:
    {
        fontSize: 15
    },
    imgContainer:
    {
        marginRight: 25
    },
    iconContainer:
    {
        textAlign: 'right'
    }
})
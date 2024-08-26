import { ScrollView, StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import Products from "./Products/Products";


const ProductComponent = () => {
    return (
        <ScrollView style={styles.productContainer}>
            <View style={styles.iconContainer}>
                <View style={styles.holdingContainer}>
                    <Feather name="search" size={30} color="black" />
                    <Feather name="shopping-cart" size={30} color="black" />
                </View>
            </View>
            <View style={styles.headerContent}>
                <Text style={styles.headerTitle}>Explore</Text>
                <Products></Products>
            </View>
        </ScrollView>
    )
}

export default ProductComponent


const styles = StyleSheet.create({
    productContainer:
    {
        padding: "5%",
    },
    iconContainer:
    {
        flex: 1,
        alignItems: 'flex-end'
    },
    holdingContainer : 
    {
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'row',
        alignItems : 'center',      
    },
    headerTitle:
    {
        fontSize : 30,
        fontWeight : 'bold',
        marginTop: "10%"
    },
   

})
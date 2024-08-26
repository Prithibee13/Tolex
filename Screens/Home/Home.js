import { StyleSheet, Text, View } from "react-native"
import HomeComponents from "../../Components/HomeComponents"

const Home = (props) => {
    return (
        <View style={styles.container}>

        <HomeComponents navigation = {props.navigation}/>           
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1
        }
    }
)
import { View } from "react-native"
import StartComponents from "../../Components/StartComponent"
import Products from "../../Components/Products/Products"

const Start = (props) =>
{
    return (
        <View>
            <StartComponents navigation = {props.navigation}></StartComponents>
            {/* <Products></Products> */}
        </View>
    )
}


export default Start
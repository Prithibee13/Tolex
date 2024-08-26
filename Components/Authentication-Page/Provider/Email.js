import { StyleSheet, TextInput, View } from "react-native"

const Email = (props) => {
    const { type, emailChange, passChange } = props

    let render

    const signIn =
        <View>
            <TextInput placeholder="Enter Email" style={Styles.textInput} onChange={(e)=>emailChange(e)}></TextInput>
            <TextInput placeholder="Enter Password" style={Styles.textInput} onChange={(e) => passChange(e)}></TextInput>
        </View>
    const signUp =
        <View>
            <TextInput placeholder="Enter Email" style={Styles.textInput}></TextInput>
            <TextInput placeholder="Enter Password" style={Styles.textInput}></TextInput>
            <TextInput placeholder="Confirm Password" style={Styles.textInput}></TextInput>
        </View>
        if(type === 'signIn')
        {
            render = signIn
        }
        else if(type === 'signUp')
        {
            render = signUp
        }
    return (
        <View>
            {render}
        </View>
    )
}

export default Email

const Styles = StyleSheet.create({
    textInput: {
        borderWidth: 4,
        padding: '2%',
        width: 300,
        marginVertical: "5%",
        borderRadius: 10,
        backgroundColor: '#F6DCAC',
        borderColor: 'transparent'
    }
})
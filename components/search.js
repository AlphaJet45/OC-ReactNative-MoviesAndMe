import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render () {
        return (
            <View style = { styles.view }>
                <TextInput placeholder="Titre du film" style = { styles.textinput }></TextInput>
                <Button title="Rechercher" onPress={() => {}} style = { styles.button }></Button>
                {/* Equivalent de : onPress = {function() {}} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 30
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      },
    button: {
        height: 50
    }
})

export default Search
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = { 
            films: []
        }
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ films: data.results })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render () {
        console.log("RENDER")
        return (
            <View style = { styles.main_container }>
                <TextInput placeholder="Titre du film" style = { styles.textinput } onChangeText = { (text) => this._searchTextInputChanged(text) }></TextInput>
                <Button title="Rechercher" onPress={ () => { this._loadFilms() } } style = { styles.button }></Button>
                {/* Equivalent de : onPress = {function() {}} */}
                <FlatList
                    data = { this.state.films }
                    keyExtractor = { (item) => item.id.toString() }
                    renderItem = { ({ item }) => <FilmItem film = { item }></FilmItem> }
                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
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
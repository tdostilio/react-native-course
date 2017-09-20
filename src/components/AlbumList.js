import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//This is a functional component - a function that returns JSX

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album list!!!</Text>
            </View>
        );
    }
}

export default AlbumList;

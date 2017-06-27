import React, { Component } from 'react';
import Expo from 'expo';
import {ToastAndroid} from 'react-native';
import {create} from 'apisauce';
import store from 'react-native-simple-store';

import UserCard from '../components/userCard';
import {View, Button, Title, Text, NavigationBar} from '@shoutem/ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';

const api = create({
    baseURL: 'http://192.168.1.103:8000'
});

class UserCardScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_data: {},
            did_fetch: false,
        };
        
        this.render = this.render.bind(this);
    }

    componentWillMount() {
        const {data} = this.props.navigation.state.params;

        api
            .get('/get?id=' + data)
            // .then(resp => this.setState({user_data: resp.data}))
            .then(response => this.setState({user_data: response.data, did_fetch: true}))
            .catch();
    }

    render() {

        if(!this.state.did_fetch){
            return (
                <View><Text>Please wait while we load the Api</Text></View>
            );}
        else
            return (
                <View style={{marginTop: Expo.Constants.statusBarHeight, flex:1, alignItems: 'center', justifyContent: 'center', 
                    backgroundColor: '#34495e', elevation: 2 }}>
                <View styleName="fill-parent">
                    <NavigationBar 
                        leftComponent={<Button onPress={()=> this.props.navigation.navigate('HomeScreen')}><Iconm style={{padding: 20, fontSize: 18}}name="qrcode-scan" /></Button>}
                        centerComponent={<Title style={{fontSize: 16}}>CONNECTICUT</Title>}
                    />
                    </View>
                    <View styleName="fill-parent vertical v-end">
                        <Button 
                            style={{height: 56}}
                            onPress={this._saveData.bind(this)}>
                            <Icon style={{fontSize: 20}} name="life-saver" />
                            <Title styleName="md-gutter">Save</Title>
                        </Button>
                    </View>
                    <UserCard 
                        data={this.state.user_data}
                    />
                </View>
            );
    }

    async _saveData() {
        const prev_data = await store.get('friends');
        user_data_str = JSON.stringify(this.state.user_data)

        if (prev_data === null){
            await store.save('friends', [user_data_str]);
            ToastAndroid.showWithGravity('Saved !!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
        else {
            for(i=0; i < prev_data.length; ++i){
                p = JSON.parse(prev_data[i])
                if ( p.number === this.state.user_data.number){
                    ToastAndroid.showWithGravity('Already Saved !!', ToastAndroid.LONG, ToastAndroid.CENTER);
                    return;
                }
            }

            await store
                .push('friends', user_data_str)
            ToastAndroid.showWithGravity('Saved !!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }

    }
}

export default UserCardScreen;
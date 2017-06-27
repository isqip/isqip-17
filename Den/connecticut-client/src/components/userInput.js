import React, { Component } from 'react';
import Expo from 'expo';
import { View, Text, Button, Icon} from '@shoutem/ui';
import { TextInput } from 'react-native';
import {create} from 'apisauce';

import store from 'react-native-simple-store';

const api = create({
    baseURL: 'http://192.168.1.103:8000'
});

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
            facebook: '',
            twitter: '',
            instagram: '',
            job_title: '',
            company: '',
        };

        this.render = this.render.bind(this);
    }

    _handleUserData() {
        store
            .save('user', {
                name: this.state.name,
                number: this.state.number,
                facebook: this.state.facebook,
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                job_title: this.state.job_title,
                company: this.state.company,
            })
            .catch(err => alert(err.message));
    //    http://0.0.0.0:8000/user/?name=aswin&mobile=8589931950&fb=aswinmohanme&tw=aswinmohanme&insta=aswinmohanme&job=Hacker&comp=google 
        api.get('/user/?name='+this.state.name
            +'&mobile='+ this.state.number
            +'&fb='+ this.state.facebook
            +'&tw='+ this.state.twitter
            +'&insta='+ this.state.instagram
            +'&job='+ this.state.job_title
            +'&comp='+ this.state.company)
            .then(() => this.props.navigation.navigate('HomeScreen'))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <View style={{marginTop:Expo.Constants.statusBarHeight ,flex: 1, alignItems:'center', justifyContent: 'center'}}>
                <View style={{width: '90%'}}>
                    <View styleName="sm-gutter">
                <Text styleName="">Name</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({name: text})}
                    value={this.state.name}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                    <View styleName="sm-gutter">
                <Text>Phone Number</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({number: text})} 
                    value={this.state.number}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                    <View styleName="sm-gutter">
                <Text styleName="">Facebook</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({facebook: text})}
                    value={this.state.facebook}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                    <View styleName="sm-gutter">
                <Text styleName="">Twitter</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({twitter: text})}
                    value={this.state.twitter}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                    <View styleName="sm-gutter">
                <Text styleName="">Instagram</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({instagram: text})}
                    value={this.state.instagram}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                    <View styleName="sm-gutter">
                <Text styleName="">Company</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({company: text})}
                    value={this.state.company}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                    <View styleName="sm-gutter">
                <Text styleName="">Job Title</Text>
                <TextInput 
                    onChangeText = {(text) => this.setState({job_title: text})}
                    value={this.state.job_title}
                    style={{paddingBottom: 10, paddingLeft: 10}}
                />
                </View>
                <Button style={{height: 56}} onPress={this._handleUserData.bind(this)}><Icon name="pin"/></Button>
                </View>
                </View>
        );
    }
}
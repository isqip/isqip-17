import React, { Component } from 'react';

import store from 'react-native-simple-store';
import { View, Text, Title, Button, NavigationBar, Heading} from '@shoutem/ui';

import BarCodeGenerate from './components/barCodeGenerate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconm from 'react-native-vector-icons/SimpleLineIcons';
import UserCard from './components/userCard';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '',
        };

        this.navigate = this.props.navigation.navigate;
        this.render = this.render.bind(this);
    }

   componentWillMount(){
        store
            .get('user')
            .then(user => {
                this.setState({
                    number: user.number,
                })
            }).catch(err => {
                this.navigate('UserInputScreen')
            })
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View styleName="fill-parent">
                    <NavigationBar 
                        centerComponent={<Title style={{fontSize: 16}}>CONNECTICUT</Title>}
                    />
                    </View>
                    <Title styleName="md-gutter">Scan Me</Title>
                <BarCodeGenerate 
                    number={this.state.number}
                />
                <View styleName="fill-parent horizontal v-end">
                    <Button 
                        style={{flex: 1,height: 56}}
                        onPress={() => navigate('UserCardScreen', {data: this.state.number})}>
                        <Iconm style={{fontSize: 30}} name="user-following" />
                    </Button>
                    <Button 
                        style={{flex: 1, height: 56}}
                        onPress={() => navigate('BarCodeScan')}>
                        <Icon style={{fontSize: 40}} name="camera-iris" />
                    </Button>
                </View>
                </View>
        );
    }
}
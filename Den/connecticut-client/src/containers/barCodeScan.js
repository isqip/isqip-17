import React, { Component } from 'react';
import Expo from 'expo';

import BarCodeReader from '../components/barCodeReader';
import {View} from '@shoutem/ui';

class BarCodeScan extends Component {
    render() {
        return (
            <View style={{marginTop: Expo.Constants.statusBarHeight, flex:1}}>
                <BarCodeReader _handleQrCode={this._handleQrCode.bind(this)}/>
            </View>
        );
    }

    _handleQrCode(data) {
        this.props.navigation.navigate('UserCardScreen', {data: data.data});
    }
}

export default BarCodeScan;
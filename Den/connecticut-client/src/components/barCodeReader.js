import React, { Component } from 'react';
import Expo, { BarCodeScanner, Permissions  } from 'expo';

import { View, Text } from '@shoutem/ui';

class BarCodeReader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            hasCameraPermission: null,
            scanned: false,
        };

        this.render = this.render.bind(this);
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status})
    }

    render(){
        const { hasCameraPermission, scanned} = this.state;
        if(hasCameraPermission === null || scanned === true){
            return <View></View>;
        }else if(hasCameraPermission === false){
            return <Text> Oops No Camera! </Text>
        } else {
            return(
                <View style={{flex: 1}}>
                    <BarCodeScanner 
                        onBarCodeRead={this._handleQrCodeScan.bind(this)}
                        style={{flex: 1}}
                    />
                </View>
            );
        }
    }

    _handleQrCodeScan(data) {
        this.setState({scanned: true});
        this.props._handleQrCode(data);
    }

}

export default BarCodeReader;
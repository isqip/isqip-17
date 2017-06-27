
import React, { Component } from 'react';

import QRCode from 'react-native-qrcode';
import { View } from '@shoutem/ui';

const BarCodeGenerate = ({ number }) => {
    return(
        <QRCode 
            value={number}
            size={160}
        />
    );
}
export default BarCodeGenerate;
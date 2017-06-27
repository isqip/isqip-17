import Expo, {Font} from 'expo';
import React from 'react';
import { StyleSheet} from 'react-native';

import {Examples, Text, View } from '@shoutem/ui';
import { StackNavigator } from 'react-navigation';

import App from './src/app';
import BarCodeScan from './src/containers/barCodeScan';
import UserCardScreen from './src/containers/userCard';
import UserInput from './src/components/userInput';

export class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fontsAreLoaded: false,
    }
  }
   async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({fontsAreLoaded: true});
}
  render() {
    if (this.state.fontsAreLoaded)
      return(
        <View style={{marginTop: Expo.Constants.statusBarHeight, flex:1}}>
          <App navigation={this.props.navigation} />
        </View>
      );
    else
      return(<Expo.AppLoading />);
  }
}

const Connecticut = StackNavigator({
    HomeScreen: {screen: Home},
    UserCardScreen: {screen: UserCardScreen},
    UserInputScreen: {screen: UserInput},
    BarCodeScan: {screen: BarCodeScan},
  },{
    navigationOptions: {
        header: null,
    }
});

Expo.registerRootComponent(Connecticut);

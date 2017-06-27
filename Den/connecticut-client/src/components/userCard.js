import React, { Component } from 'react';
import {View, Text,Button, Title, Image} from '@shoutem/ui';
import {WebBrowser} from 'expo';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const UserCard = ({data}) => {
    return(
        <View styleName="lg-gutter" style={{width: '80%', alignItems: 'center', backgroundColor: '#ecf0f1', borderRadius: 8}}>
            <Image 
                styleName="medium-avatar"
                source={{ uri: "https://api.adorable.io/avatars/285/abott@adorable.png"}}
            />
            <Title style={{fontSize: 24}} styleName="lg-gutter-top sm-gutter-bottom">{data.user_name}</Title>
            <Text styleName="" style={{fontSize: 18}}>{'Call => ' + data["mobile"]}</Text>

            <Text styleName="md-gutter-top" style={{fontSize: 20}}>{data["job_title"] + ' @ '+ data["company"]}</Text>

            <View styleName="horizontal sm-gutter-top" >
            <View styleName="sm-gutter" style={{elevation: 2}}>
                <Button onPress={()=> WebBrowser.openBrowserAsync('https://facebook.com/'+data.facebook) }styleName="sm-gutter" style={{padding: 14}}>
                    <Icon style={{fontSize: 18}}name="social-facebook"/>
                </Button>
            </View>
            <View styleName="sm-gutter">
                <Button onPress={()=> WebBrowser.openBrowserAsync('https://twitter.com/'+data.twitter) } styleName="sm-gutter"style={{padding: 14}}>
                    <Icon style={{fontSize: 18}} name="social-twitter"/>
                </Button>
            </View>
            <View styleName="sm-gutter">
                <Button onPress={()=> WebBrowser.openBrowserAsync('https://insta.com/'+data.instagram) } styleName="sm-gutter"style={{padding: 14}}>
                    <Icon style={{fontSize: 18}}name="social-instagram"/>
                </Button>
            </View>
            </View>
        </View>
    );
}
export default UserCard;
import React from 'react';
import {Text, View} from 'react-native';

const Contact = ({navigation, route}) => {
    console.log(route.params);
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{fontSize: 30}}>Le contact est : {route.params.user}</Text>
        </View>
    );
};

export default Contact;

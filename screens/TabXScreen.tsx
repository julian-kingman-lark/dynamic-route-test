import React from 'react';
import { Text, View } from 'react-native';

const TabXScreen = ({ route, navigation }) => {
    console.log({ route, navigation });

    const { user } = route?.params ?? {};
    console.log(route.params);

    return <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text style={{ color: "white" }}>{JSON.stringify(user)}</Text>
    </View>
}

export default TabXScreen;
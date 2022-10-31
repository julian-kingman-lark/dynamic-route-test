import React from 'react';
import { Text, View } from 'react-native';

const TabXScreen = ({ route, navigation }) => {
    console.log({ route, navigation });

    const { id } = route?.params ?? {};
    console.log(id);

    return <View>
        <Text>{id}</Text>
    </View>
}

export default TabXScreen;
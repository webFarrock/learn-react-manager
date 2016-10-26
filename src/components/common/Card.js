import React from 'react';
import {View} from 'react-native';


const Card = ({children}) => {
    return (
        <View style={styles.containerStyles}>
            {children}
        </View>
    );
};


const styles = {
    containerStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

export { Card };
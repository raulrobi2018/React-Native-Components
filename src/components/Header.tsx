import React from 'react'
import { Platform, Text } from 'react-native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../styles/appStyles'

interface Props {
    title: string
}

export const Header = ({title}: Props) => {

    const {top} = useSafeAreaInsets ();

    let topM = Platform.OS === 'ios' ? top + 20 : top + 5;

    return (
        <View style={{marginTop: topM}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
}

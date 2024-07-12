import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite (websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text>ActionCard</Text>
      <View>
        <Image style={styles.cardImage} source={{uri:'https://images.unsplash.com/photo-1720524270904-43dc519c1b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'}}/>
        <View>
            <TouchableOpacity onPress={() => openWebsite('https://unsplash.com/photos/a-view-of-a-mountain-range-with-wildflowers-in-the-foreground-JWmCkCiTi_c')}>
                <Text style={styles.cardButton}>click here</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    cardImage: {
        width: 400,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    cardButton: {
        backgroundColor: '#007bff',
        textAlign: 'center',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '30%',
        marginBottom: 10,
    }
})
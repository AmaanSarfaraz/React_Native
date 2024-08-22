import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ActionCard</Text>
            <Image
                style={styles.cardImage}
                source={{ uri: 'https://images.unsplash.com/photo-1720524270904-43dc519c1b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D' }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://unsplash.com/photos/a-view-of-a-mountain-range-with-wildflowers-in-the-foreground-JWmCkCiTi_c')}>
                    <Text style={styles.cardButton}>Click Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Center items horizontally
        padding: 10,
    },
    cardImage: {
        width: 400,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    text: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center', // Center the button container horizontally
        width: '100%', // Full width to center within its container
    },
    cardButton: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        width: '30%',
    }
})

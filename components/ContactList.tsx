import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        { id: 1, name: 'John Doe', phone: '1234567890', imageUrl: 'https://plus.unsplash.com/premium_photo-1720350578969-b85f9a388c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Jane Smith', phone: '0987654321', imageUrl: 'https://plus.unsplash.com/premium_photo-1679064286509-0ba3cac02932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Alice Johnson', phone: '9876543210', imageUrl: 'https://plus.unsplash.com/premium_photo-1719910647085-195dbaf13965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D' },
    ]
  return (
    <View>
      <Text style={styles.text}>ContactList</Text>
      <ScrollView  scrollEnabled={false}>
        {contacts.map(({id, name, phone, imageUrl}) =>(
            <View style={styles.card} key={id}>
                <Image style={styles.cardImage} source={{uri: imageUrl}}/>
              <View>
                <Text>{id}</Text>
                <Text>{name}</Text>
                <Text>{phone}</Text>
              </View>
            </View>  
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
},
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 10,
        resizeMode: 'cover'
    },
    cardHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        paddingTop: 10
    },
    card:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    }
})
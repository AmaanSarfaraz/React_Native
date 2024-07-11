import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.text}>FancyCard</Text>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://images.unsplash.com/photo-1718931216623-ceabe5660711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'}} />
        <View>
            <Text style={styles.cardTitle}>A flower</Text>
            <Text style={styles.cardAuthor}>by Jane Doe</Text>
            <Text style={styles.cardDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos vitae delectus officiis eveniet error, alias deserunt voluptates et ducimus? Odit, praesentium non? Nemo enim nostrum perspiciatis, veniam aspernatur qui?</Text>
            <Text style={styles.cardPrice}>Price: $25</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    card: {
        padding: 2,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        elevation: 1,
  
    },
    text: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      cardImage: {
        height: 300,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      },
      cardTitle:{
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
      },
      cardAuthor: {
        color: 'black',
        textAlign : 'right',
        fontSize: 16,
        marginBottom: 14
      },
      cardDescription: {
        color: '#2C3335',
        marginBottom: 8
      },
      cardPrice: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 14,
        marginTop: 14,

      },
})
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.text}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 3</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 4</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 5</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 6</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 7</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      card: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        margin: 10,
        borderRadius: 10,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardText: {
        color: 'black',
      }
})
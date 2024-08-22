import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>First Project</Text>
      <View style={[styles.innerContainer]}>
        <View style={[styles.redView, styles.card]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.greenView, styles.card]}>
          <Text>green</Text>
        </View>
        <View style={[styles.blueView, styles.card]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.violetView, styles.card]}>
          <Text>Violet</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  redView: {
    backgroundColor:'red',
  },
  greenView: {
    backgroundColor:'green',
  },
  blueView: {
    backgroundColor:'blue',
  },
  violetView: {
    backgroundColor:'violet',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  }
})

export default FlatCards
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>First Project</Text>
      <View style={[styles.innerContainer]}>
        <View style={[styles.redView]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.greenView]}>
          <Text>green</Text>
        </View>
        <View style={[styles.blueView]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.violetView]}>
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
    padding: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  greenView: {
    backgroundColor:'green',
    padding: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  blueView: {
    backgroundColor:'blue',
    padding: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,

  },
  violetView: {
    backgroundColor:'violet',
    padding: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  pad: {
    padding: 10,
  }
})

export default FlatCards
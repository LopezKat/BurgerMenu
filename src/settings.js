import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Settings </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red'
  },
  text:{
      color: 'white',
      fontSize: 30,
  }
})

export default Settings;

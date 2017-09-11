/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class Tab2 extends Component {
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab2Page1')}
        >
          <Text>
            Page1
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab2Page2')}
        >
          <Text>
            Page2
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab2Page3')}
        >
          <Text>
            Page3
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
          width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab2Page4')}
        >
          <Text>
            Page4
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});



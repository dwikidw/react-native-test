import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HeaderComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={style.header}>
          <View style={[style.button, style.buttonActive]}>
            <Text style={[style.buttonText, style.textActive]}> Feed </Text>
          </View>
          <View style={style.button}>
            <Text style={style.buttonText}> Discover </Text>
          </View>
          <View style={style.searchBar}>
            <Icon name="search" size={30} color="black" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-evenly',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  button: {
    marginRight: 5,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textActive: {
    color: 'white',
  },
  buttonActive: {
    backgroundColor: 'black',
    borderRadius: 25,
  },
  searchBar: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

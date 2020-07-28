import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {textStyle} from '../styles/Styles';

const InsiderItem = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        width: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowColor: '#eaeaea',
        shadowOffset: {width: 1, height: 1},
      }}>
      <View
        style={{
          flex: 3,
          paddingTop: 15,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: '#eaeaea',
            width: 70,
            height: 70,
            borderRadius: 35,
          }}></View>
      </View>
      <View
        style={{
          flex: 4,
          padding: 15,
        }}>
        <View
          style={{
            flex: 1,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', marginBottom: 5, fontSize: 16}}>
            Mangotop
          </Text>
          <Text style={[textStyle.cGrey, {fontSize: 12}]}>
            Manglu Paling Top
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 4,
                backgroundColor: 'black',
                alignItems: 'center',
              }}>
              <Text style={[textStyle.bold, textStyle.cWhite]}>FOLLOW</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InsiderItem;

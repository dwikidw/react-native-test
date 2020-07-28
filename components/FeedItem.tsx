import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {textStyle} from '../styles/Styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface Feed {
  title?: string;
  username?: string;
  imgUrl?: string;
}
export default class FeedItem extends Component<Feed> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.profile}>
            <View style={style.imgProfile}></View>
            <Text style={textStyle.fs16}>mangotop</Text>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <MaterialIcon name="more-horiz" size={30} color="black" />
            </View>
          </View>
          <View style={style.imgThumb}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={{uri: this.props.imgUrl}}
            />
          </View>
          <View style={style.descWrap}>
            <Text style={{fontSize: 12, color: 'grey'}}>FASHION</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {this.props.title}
            </Text>
            <View style={style.responBar}>
              <View
                style={{flex: 2, paddingVertical: 10, flexDirection: 'row'}}>
                <ResponItem icon="heart-o" value="324" />
                <ResponItem icon="comment-o" value="1200" />
              </View>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <ButtonRespon icon="bookmark-o" />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const ResponItem = (props: any) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
      <AwesomeIcon
        style={{marginRight: 5}}
        name={props.icon}
        size={24}
        color="black"
      />
      <Text>{props.value}</Text>
    </View>
  );
};

const ButtonRespon = (props: any) => {
  return (
    <AwesomeIcon
      style={{marginLeft: 10}}
      name={props.icon}
      size={24}
      color="black"></AwesomeIcon>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 3.5) / 4);
const imageWidth = dimensions.width;

const style = StyleSheet.create({
  container: {
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  profile: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgProfile: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
  },
  imgThumb: {
    height: imageHeight,
    width: imageWidth,
    backgroundColor: '#eaeaea',
  },
  descWrap: {
    padding: 15,
  },
  responBar: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

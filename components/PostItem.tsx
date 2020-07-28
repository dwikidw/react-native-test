import React, {Component, Props} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {textStyle} from '../styles/Styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface Post {
  imgUrl?: string;
  username?: string;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

interface PostState {
  height?: number;
  width?: number;
  uri?: string;
}

export default class PostItem extends Component<Post, PostState> {
  constructor(props: any) {
    super(props);
    this.state = {
      height: this.props.height,
      width: this.props.width,
      uri: this.props.imgUrl,
    };
  }
  componentDidMount() {
    let uri = this.props.imgUrl as string;
    Image.getSize(uri, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({
          width: this.props.width,
          height: height * (this.props.width / width),
        });
      } else if (!this.props.width && this.props.height) {
        this.setState({
          width: width * (this.props.height / height),
          height: this.props.height,
        });
      } else {
        this.setState({width: width / 2, height: height / 5});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headWrap}>
          <View style={styles.profileWrap}></View>
          <Text style={textStyle.bold}> {this.props.username}</Text>
        </View>
        <View style={[styles.imgWrap, {height: this.state.height}]}>
          <ImageBackground
            style={styles.image}
            source={{uri: this.props.imgUrl}}
          />
        </View>
        <View style={{padding: 10}}>
          <Text>{this.props.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <ResponItem icon="heart-o" value="324" />
            <ResponItem icon="bookmark-o"></ResponItem>
          </View>
        </View>
      </View>
    );
  }
}

const ResponItem = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AwesomeIcon
        style={{marginRight: 5}}
        name={props.icon}
        size={20}
        color="black"
      />
      {props.value ? <Text style={{fontSize: 12}}>{props.value}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    borderColor: '#eaeaea',
    borderRadius: 8,
    shadowOpacity: 1,
    shadowColor: '#eaeaea',
    shadowOffset: {width: 1, height: 1},
  },
  headWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileWrap: {
    height: 30,
    width: 30,
    marginRight: 5,
    borderRadius: 15,
    backgroundColor: '#eaeaea',
  },
  imgWrap: {
    flexDirection: 'column',
    backgroundColor: '#eaeaea',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

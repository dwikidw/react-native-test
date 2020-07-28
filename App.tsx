import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Header from './components/Header';
import InsiderItem from './components/InsiderItem';
import FeedItem from './components/FeedItem';
import PostItem from './components/PostItem';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3FDSda1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const DATAPOST = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ratione?',
    username: 'Mangotop',
    imgUrl:
      'https://images.unsplash.com/photo-1522322659370-3c98da30c99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'fasfaer-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Lorem, ipsum dolor sit amet consectetur elit. Rem, ratione?',
    username: 'Pergidekat',
    imgUrl:
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'fsaf-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem?',
    imgUrl:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    username: 'Bu_Setiawan',
  },
];

const DATAGRID = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    username: 'Juleasar',
    imgUrl:
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet adipisicing elit.',
    height: 150,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    username: 'Pegijauu',
    imgUrl:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor consectetur adipisicing.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    username: 'RSonny',
    imgUrl:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 'daekow-3da1-471f-bd96-145571e29d72',
    username: 'DChucknaw',
    imgUrl:
      'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 'rewerq-3da1-471f-bd96-145571e29d72',
    username: 'Mangotop',
    imgUrl:
      'https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 'asspdf-3da1-471f-bd96-145571e29d72',
    username: 'Roswing',
    imgUrl:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum, dolor sit amet  adipisicing.',
  },
];

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Header />
        <BottomNavigator />
      </NavigationContainer>
    );
  }
}

const Homepage = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex: 1}}>
          <FeedArea />
          <InsiderArea />
          <PostArea />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const Shop = () => {
  return (
    <View style={style.center}>
      <Text>Shop Page</Text>
    </View>
  );
};
const Activity = () => {
  return (
    <View style={style.center}>
      <Text>Activity Page</Text>
    </View>
  );
};
const Account = () => {
  return (
    <View style={style.center}>
      <Text>Account Page</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'purple',
      }}>
      <Tab.Screen
        name="Feed"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <AwesomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color, size}) => (
            <AwesomeIcon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color, size}) => (
            <AwesomeIcon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <AwesomeIcon name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const FeedArea = () => {
  return (
    <View>
      {DATAPOST.map((res) => {
        return <FeedItem key={res.id} title={res.title} imgUrl={res.imgUrl} />;
      })}
    </View>
  );
};

const InsiderArea = () => {
  return (
    <View style={{height: 300, paddingVertical: 5, backgroundColor: '#f4f4f4'}}>
      <View
        style={{
          flex: 1,
          padding: 15,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Top Insiders</Text>
      </View>
      <View style={{flex: 5, paddingBottom: 20}}>
        <FlatList
          contentContainerStyle={{paddingHorizontal: 20}}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 25}} />}
          data={DATA}
          renderItem={({item}) => {
            return <InsiderItem />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const PostArea = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        {DATAGRID.map((item, i) => {
          const height = Image.getSize(item.imgUrl, (w, h) => {
            return h / 5;
          });
          const width = Image.getSize(item.imgUrl, (w, h) => {
            return w / 5;
          });
          if (i % 2 == 0) {
            return (
              <PostItem
                key={item.id}
                height={height}
                width={width}
                title={item.title}
                username={item.username}
                imgUrl={item.imgUrl}
              />
            );
          }
        })}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        {DATAGRID.map((item, i) => {
          const height = Image.getSize(item.imgUrl, (w, h) => {
            return h / 5;
          });
          const width = Image.getSize(item.imgUrl, (w, h) => {
            return w / 5;
          });
          if (i % 2 == 1) {
            return (
              <PostItem
                key={item.id}
                height={height}
                width={width}
                title={item.title}
                username={item.username}
                imgUrl={item.imgUrl}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

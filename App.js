import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView from 'react-native-scrollable-tab-view'

//component Import
import Calls from './components/Calls';
import Chats from './components/Chats';
import Contacts from './components/Contacts';

export default class App extends Component {

  render() {
    return (
      <View style = {styles.mainContainer}>
        <View style = {styles.headerContainer}>
          <View style = {styles.leftHeaderContainer}>
            <Text style = {styles.logoText}>WhatsApp</Text>
          </View>
          <View style = {styles.rightHeaderContainer}>
            <Icon name="search" color='#fff' size={23} style={{padding:5}} />
            <Icon name="call" color='#fff' size={23} style={{padding:5}} />
            <Icon name="more-vert" color='#fff' size={23} style={{padding:5}}/>
          </View>
        </View>
  
        <View style = {styles.contentContainer}>
          <ScrollableTabView
            tabBarUnderlineColor="#fff"
            tabBarUnderlineStyle={{backgroundColor: "#fff"}}
            tabBarBackgroundColor ="#075e54"
            tabBarActiveTextColor="#fff"
            tabBarInactiveTextColor="#88b0ac"
          >
            <Calls tabLabel="CALLS" {...this.props} />
            <Chats tabLabel="CHATS" {...this.props} />
            <Contacts tabLabel="CONTACTS" {...this.props} />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : '#F5FCFF',
    height : 24
  },
  headerContainer : {
    flex : 1,
    flexDirection : "row",
    justifyContent : "space-between",
    backgroundColor : "#075e54",
    alignItems : "center",
    paddingRight : 5
  }, 
  leftHeaderContainer : {
    alignItems : "flex-start",
    flexDirection : "row"
  },
  rightHeaderContainer : {
    alignItems : "flex-end",
    flexDirection : "row"
  },
  contentContainer : {
    flex : 6
  },  
  logoText : {
    color : "white",
    fontWeight : "bold",
    fontSize : 16,
    alignItems : "flex-start",
    marginLeft : 10
  }
});

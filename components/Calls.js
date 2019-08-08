import React, { Component } from 'react';
import { fetch } from 'fetch';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Calls extends Component {
    
    constructor(props){
        super(props);
    
        this.state = {
          peopleDataSource : [],
          loaded : false
        }
    }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/yllongboy/81de024b02f1b668818066bcafbf3c4c/raw/5a508fd580cc1c3d104a300589e7e88d895fa766/whatsapp_contacts.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleDataSource: [...data],
          loaded : true
        })
      });
    }
    renderContactRow(contact){
        return(
          // <Text key = {contact.id}></Text>
          <View style = {styles.listItemContainer}>
            <View style = {styles.iconContainer} >
              {/* <Image source ={{uri: contact.image}} style = {styles.initStyle} resizeMode = 'contain' /> */}
              <Image source ={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'}} style = {styles.initStyle} resizeMode = 'contain' />
            </View>
    
            <View style = {styles.callerDetailContainer}>
              <View style = {styles.callerDetailContainerWrap}>
                <View style = {styles.nameContainer}>
                  <Text>{contact.first_name}</Text>
                  <View style = {styles.dateContainer}>
                    <Icon name = { typeof contact.missed === 'undefined' ? "call-missed" : "call-recieved" } size = {15} color= {typeof contact.missed === 'undefined' ?  "#ed788b" : "#075e54"}/>
                    <Text style = {{fontWeight : '400', color : '#666', fontSize : 12}}>{contact.date} {contact.time}</Text>
                  </View>
                </View>
    
                <View style = {styles.callIconContainer}>
                  <Icon name = "phone" color = "#075e54" size = {23} style = {{ padding : 5 }}/>
                </View>
              </View>
            </View>
          </View>
        );
    }
    render() {
        return (
            <FlatList
            data = {this.state.peopleDataSource}
            renderItem = {({item}) => this.renderContactRow(item) }
            />
        )
    }
}

const styles = StyleSheet.create({
    listItemContainer : {
      flex : 1,
      flexDirection : "row",
      alignItems : "center",
      padding : 10
    },
    iconContainer : {
      flex : 1,
      alignItems : "flex-start"
    },
    callerDetailContainer : {
      flex : 4,
      justifyContent : "center",
      borderBottomColor : "rgba(92,94,94,0.5)",
      borderBottomWidth : 0.25
    },
    callerDetailContainerWrap : {
      flex : 1,
      alignItems : "center",
      flexDirection : "row"
    },
    nameContainer : {
      alignItems : "flex-start",
      flex : 1
    },
    dateContainer : {
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : "center"
    },
    callIconContainer : {
      flex : 1,
      alignItems : "flex-end"
    },
    initStyle : {
      borderRadius : 30,
      width : 60,
      height : 60
    }
  });
  

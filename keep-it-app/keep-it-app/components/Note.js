import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Note extends React.Component {
  
  render () {
    return (
      <View style={styles.container} key = {this.props.task}>
        <Text style = {styles.txt}>
        {this.props.task.note}
        </Text>
        <Text style = {styles.txt}>
        {this.props.task.date}
        </Text>
        <TouchableOpacity style = {styles.btndone} onPress = {this.props.markAsDone}>
        <Text style = {{color : 'white'}}>
        Done
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor : 'grey',
    borderBottomWidth : 2,
    padding: 20,
    marginHorizontal : 5
  },
  txt : {
    fontSize : 20,
    borderLeftColor : '#ededed',
    borderLeftWidth : 10,
    paddingLeft : 20

  },
  btndone : {
    position : 'absolute',
    padding : 20,
    right : 10,
    top : 15,
    backgroundColor : 'grey',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10


  },

});

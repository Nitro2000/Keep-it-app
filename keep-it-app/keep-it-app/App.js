import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Constants from 'expo-constants';

import Note from './components/Note'

import db from './config'

export default class KeepIt extends React.Component {

constructor () {
  super();
  this.state = {
    arr : [],
    textInput : "",
    
  }
}

componentDidMount() {
  const data = db.ref('tasks')
  data.on('value', (data) => {
    const todo = data.val();
    const taskList = [];
    for (var id in todo) {
      taskList.push({id, ...todo[id]})
    }
    this.setState({arr : taskList})
  })
}

addTask = () => {
  const d = new Date();
  var array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const addTa = db.ref('tasks');


  if (this.state.textInput) {
    const dataAdd = {
      note : this.state.textInput,
      date : d.getDate() + "/" + array[d.getMonth()] + "/" + d.getFullYear()
      }
    addTa.push(dataAdd)
    this.setState({textInput : ""})
  }
}

markDone = (item) => {
  const deleteData = db.ref('tasks').child(this.state.arr[item].id)
  deleteData.remove()

  this.state.arr.splice(item, 1);
}


  render() {
    var notes = this.state.arr.map((item, index) =>
            <Note task = {item} markAsDone = {() => {this.markDone(index)}}/>)
    return (

      <View style={styles.container}>
        <View style={styles.viewKeepIt}>
          <Text style={{ fontSize: 30 }}>Keep It</Text>
        </View>
        <ScrollView style = {{marginBottom : 90}}>
        {notes}
        </ScrollView>

        <View style={styles.viewInput}>
          <TextInput style={styles.txtInput} placeholder="Enter Text" onChangeText = {(txt) => {this.setState({textInput : txt})}}/>
          <TouchableOpacity style={styles.inputButton} onPress = {this.addTask}>
            <Text style={styles.txtPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginTop : 10,
  },
  viewKeepIt: {
    height: 80,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
  viewInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: 'gold',
    borderTopWidth: 3,
  },
  txtInput: {
    padding : 30,
    outline : 'none'
  },
  inputButton: {
    position: 'absolute',
    height : 50,
    width : 50,
    right: 15,
    top : 10,
    alignItems : 'center',
    backgroundColor: 'gold',
    borderRadius : 100
  },
  txtPlus: {
    margin : 2,
    fontSize : 30,
  }
});

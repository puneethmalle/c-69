import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";


export default class TransactionScreen extends Component {
constructor(props){
  super(props);
  this.state = {
    domState:"normal",
    hasCameraPermission:null,
    scanned:false,
    scannedData:"",
  };
}

  
getCameraPermissions = async = domState =>{
  const{status} = await permissions.askAsync(Permissions.CAMERA);

this.setState({
  hasCameraPermission:status === "granted",
  domState:domState,
  scanned:false,
});
};

handleBarCodeScanned = async({type,data}) =>{
  this.setState({
    scannedData:data,
    domState:"normal",
    scanned:true,
  });
};

  render() {
    const{domState,hasCameraPermission,scannedData,scanned} = this.State;
    if(domState === "scanner"){
      return(
        <BarCodeScanner
        onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned}
        style = {StyleSheet.absoluteFillObject}
        >
        </BarCodeScanner>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  button:{
    width:"43%",
    height:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f48d20",
    borderRadius: 15,
  },
  buttonText:{
    fontSize:23,
    color:"#ffffff",
  }

  
});

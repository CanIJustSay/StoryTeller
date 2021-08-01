
import * as React from 'react';;
import { StyleSheet, Text, View } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

export default class Menu extends React.Component {
  render(){
  return (
    <View>
<DrawerItems {...this.props}></DrawerItems>
    </View>
  );
  }
}

const styles = StyleSheet.create({

});

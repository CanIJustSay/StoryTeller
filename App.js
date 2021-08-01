import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Profile from "./screens/profile";
import Feed from "./screens/feed";
import Create from "./screens/create";
import Story from "./screens/story"
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Menu from "./components/sideMenu";
import { createStackNavigator } from "react-navigation-stack";

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}
const bottomTab = createMaterialBottomTabNavigator({ 
   Feed: { screen: Feed },
  Create: { screen: Create },

});
const storyNav = createStackNavigator(
  {
  bottomTab: {screen: bottomTab},
  Story: {screen: Story}
  }
);
const drawerNav = createDrawerNavigator(
  {
    Home: { screen: storyNav },
    Profile: { screen: Profile },
  },
  {
    contentComponent: Menu,
  },
  {
    initialRouteName: "Home",
  }
);


const AppContainer = createAppContainer(drawerNav);
const styles = StyleSheet.create({});

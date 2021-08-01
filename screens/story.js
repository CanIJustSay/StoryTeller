import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Speeck from 'expo-speech';
let customFont = {
  "BubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};
let stories = require("./stories.json");

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyData: this.props.navigation.getParam("Story"),
      hasFontLoaded: false,
      speakerIcon: "",
      speakerColor: "",
    };
  }
  loadFont = async () => {
    await Font.loadAsync(customFont);
    this.setState({});
  };
  playStory = () => {
    
  }
  componentDidMount() {
    this.loadFont();
  }

  render() {
    if (!this.state.hasFontLoaded) {
      return (
        <View>
          <AppLoading></AppLoading>
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ justifyContent: "center", pading: 5 }}>
            <Text style={s.storyCardText}>{this.state.storyData.title}</Text>
            <Text style={s.storyCardText}>{this.state.storyData.author}</Text>
            <Text style={s.storyCardText}>{this.state.storyData.date}</Text>
            <Text style={s.storyCardText}>
              {this.state.storyData.description}
            </Text>
            <Text style={s.storyCardText}>{this.state.storyData.story}</Text>
            <TouchableOpacity onPress={()=>{this.playStory();}}>
              <Ionicons
                name={this.state.speakerIcon}
                color={this.state.speakerColor}
                size={30}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const s = StyleSheet.create({
  storyCard: {
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "rgba(150,150,150,1)",
    padding: 4,
  },
  storyImage: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  storyCardText: {
    fontFamily: "BubbleGum-Sans",
    padding: 5,
  },
});

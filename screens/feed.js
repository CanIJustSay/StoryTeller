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
let customFont = {
  "BubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};
let stories = require("./stories.json");

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      hasFontLoaded: false,
    };
  }
  loadFont = async () => {
    await Font.loadAsync(customFont);
    this.setState({
      hasFontLoaded: true,
    });
  };
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
        <View style={s.container}>
          <View style={s.title}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                width: 70,
                height: 90,
                position: "absolute",
                top: 20,
                left: 20,
              }}
            ></Image>
            <Text
              style={{
                fontSize: RFValue(40),
                color: "white",
                position: "relative",
                fontFamily: "BubbleGum-Sans",
                left: 220,
                top: 50,
              }}
            >
              Your Feed
            </Text>
          </View>

          <View style={s.cards}>
            <FlatList
              data={stories}
              renderItem={({ item }) => {
                return (
                  <View style={s.storyCard}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Story", {
                          story: item,
                        });
                        console.log("yes");
                      }}
                    >
                      <Image
                        source={require("../assets/book.png")}
                        style={s.storyImage}
                      ></Image>
                      <View style={{ justifyContent: "center", pading: 5 }}>
                        <Text style={s.storyCardText}>{item.title}</Text>
                        <Text style={s.storyCardText}>{item.author}</Text>
                        <Text style={s.storyCardText}>{item.created_on}</Text>
                        <Text style={s.storyCardText}>{item.description}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            ></FlatList>
          </View>
        </View>
      );
    }
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(60,60,60,1)",
    height: "100%",
  },
  title: {
    flex: 0.17,
    flexDirection: "row",
    backgroundColor: "rgba(100,100,100,0.7)",
  },
  cards: {
    flex: 0.83,
  },
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

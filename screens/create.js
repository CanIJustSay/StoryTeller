import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
let customFont = {
  "BubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      hasFontLoaded: false,
        title: "",
        author: "",
        date: "",
        description: "",
        moral: "",
        story: "",
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
                left: 270,
                top: 50,
              }}
            >
              Create
            </Text>
          </View>
            <ScrollView>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "rgba(40,40,40,0.4)",
              alignItems: "center",
              position:'absolute',
              top:0,
              left:110,
            
            }}
          >

            <Image
              source={require("../assets/book.png")}
              style={s.storyImage}
            ></Image>

            <TextInput
              placeholder={"Title"}
              style={s.textInputs}
              placeholderTextColor={"black"}
              
              onChangeText={(data)=>{
                this.setState({
                  title:data
                });
              }}
            ></TextInput>

            <TextInput
              placeholder={"Author"}
              style={s.textInputs}
              placeholderTextColor={"black"}

              onChangeText={(data)=>{
                this.setState({
                  author:data
                });
              }}
            ></TextInput>

            <TextInput
              placeholder={"Date"}
              style={s.textInputs}
              placeholderTextColor={"black"}

              onChangeText={(data)=>{
                this.setState({
                  date:data
                });
              }}
            ></TextInput>

            <TextInput
              placeholder={"Description"}
              style={s.textInputs}
              placeholderTextColor={"black"}
              numberOfLines={2}
              multiline={true}

              onChangeText={(data)=>{
                this.setState({
                  description:data
                });
              }}
            ></TextInput>

            <TextInput
              placeholder={"Moral"}
              style={s.textInputs}
              placeholderTextColor={"black"}

              onChangeText={(data)=>{
                this.setState({
                  moral:data
                });
              }}
            ></TextInput>

            <TextInput
              placeholder={"Story"}
              style={{
                width: 200,
                height: 300,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 5,
              }}
              multiline={true}
              placeholderTextColor={"black"}

              onChangeText={(data)=>{
                this.setState({
                  story:data
                });
              }}
            ></TextInput>



          </View>
          </ScrollView>
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
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "rgba(100,100,100,0.7)",
  },
  storyImage: {
    
    alignSelf: "center",
    resizeMode: "contain",
    width: 100,
    height: 100,
    padding: 5,
    margin: 5,
  },
  textInputs: {
    padding: 5,
    marginTop: 5,
    height: 50,
    width: 200,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    fontFamily: "BubbleGum-Sans",
    color: "white",
  },
});

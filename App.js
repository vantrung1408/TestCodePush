import React from "react";
import { ScrollView, TextInput, View } from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View>
              <TextInput
                  style={{
                      backgroundColor: "white",
                      height: 48,
                      paddingTop: 14,
                      fontSize: 16
                  }}
                  placeholder="This TextInput scrolls correctly on iOS"
              />
            </View>
        );
    }
}

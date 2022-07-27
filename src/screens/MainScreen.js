import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(248, 113, 113)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.whiteText}>Metal Heroes</Text>
      </View>

      <View
        style={{ flex: 5, alignItems: "center", justifyContent: "center" }}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  whiteText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 45,
  },
  whiteSmallText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 35,
  },
  photo: {
    width: 300,
    height: 260,
  },
  button: {
    borderRadius: 16,
    borderColor: "rgb(34, 211, 238)",
    padding: 5,
    backgroundColor: "rgb(34, 211, 238)",
  },
  smallBox: {
    padding: 5,
  },
});

export default HomeScreen;

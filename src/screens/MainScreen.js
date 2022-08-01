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

      <View style={[styles.whitePart, styles.border]}>
        <Text style={{ color: "white" }}>NOTAS</Text>
      </View>
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
  button: {
    borderRadius: 16,
    borderColor: "rgb(34, 211, 238)",
    padding: 5,
    backgroundColor: "rgb(34, 211, 238)",
  },
  border: {
    backgroundColor: "rgb(248, 113, 113)",
    borderColor: "transparent",
    borderRadius: 35,
    margin: 20,
  },
  whitePart: {
    padding: 5,
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

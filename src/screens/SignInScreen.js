import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Login</Text>
      <CustomInput
        name="Email"
        placeholder="Email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
      />

      <CustomInput
        name="password"
        placeholder="Password"
        secureTextEntry
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Password should be minimum 3 characters long",
          },
        }}
      />

      <CustomButton
        text={loading ? "Loading..." : "Sign In"}
        onPress={handleSubmit(onSignInPressed)}
      />

      <CustomButton
        text={loading ? "Loading..." : "Prueba"}
        onPress={() => navigation.navigate("MainScreen")}
      />

      <Text style={styles.text}>
        Don't have an account?,{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          Create One
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(248, 113, 113)",
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  text: {
    color: "white",
    marginVertical: 10,
  },
  link: {
    color: "rgb(34, 211, 238)",
    fontWeight: "bold",
  },
});

export default SignInScreen;

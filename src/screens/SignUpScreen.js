import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "./SignInScreen";
// import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();

  const onRegisterPressed = async (data) => {
    // const {username, password, email, name} = data;
    // try {
    //   await Auth.signUp({
    //     username,
    //     password,
    //     attributes: {email, name, preferred_username: username},
    //   });
    //   navigation.navigate('ConfirmEmail', {username});
    // } catch (e) {
    //   Alert.alert('Oops', e.message);
    // }
  };

  const onSignInPress = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput
        name="name"
        control={control}
        placeholder="Name"
        rules={{
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name should be at least 3 characters long",
          },
          maxLength: {
            value: 24,
            message: "Name should be max 24 characters long",
          },
        }}
      />

      <CustomInput
        name="email"
        control={control}
        placeholder="Email"
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
      />
      <CustomInput
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
        }}
      />
      <CustomInput
        name="password-repeat"
        control={control}
        placeholder="Repeat Password"
        secureTextEntry
        rules={{
          validate: (value) => value === pwd || "Password do not match",
        }}
      />

      <CustomButton
        text="Register"
        bgColor={"rgb(34, 211, 238)"}
        onPress={handleSubmit(onRegisterPressed)}
      />

      <Text style={styles.text}>
        Or if you have an account,{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          Login Here
        </Text>{" "}
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
  text: {
    color: "white",
    marginVertical: 10,
  },
  link: {
    color: "rgb(34, 211, 238)",
    fontWeight: "bold",
  },
});

export default SignUpScreen;

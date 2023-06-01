import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import AppTextInput  from "../components/AppTextInput";



type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={{ textAlign: "center", alignItems: "center" }}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.subText}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>

      <View style={styles.inputWrap}>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Password" />
        <AppTextInput placeholder="Confirm Password" />
      </View>
      <TouchableOpacity onPress={() => navigate("Login")} style={styles.button}>
        <Text style={styles.buttonText}>Sigh up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("Welcome")}
        style={styles.newAccount}
      >
        <Text style={styles.newText}>Already have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continue}>
        <Text style={styles.continueText}>Or continue with</Text>
      </TouchableOpacity>

      <View style={styles.iconsWrap}>
        <TouchableOpacity style={styles.socialIcons}>
          <AntDesign
            style={styles.socialIcon}
            name="google"
            size={24}
            color="darkgrey"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcons}>
          <Entypo
            style={styles.socialIcon}
            name="facebook-with-circle"
            size={24}
            color="darkgrey"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcons}>
          <Ionicons
            style={styles.socialIcon}
            name="logo-apple"
            size={24}
            color="darkgrey"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
    marginTop: 90,
    fontSize: 40,
    fontWeight: "bold",
    color: "#1B9C85",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  subText: {
    textAlign: "center",
    paddingHorizontal: 8,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  inputWrap: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  email: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFB84C",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  password: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFB84C",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  forgot: {
    textAlign: "right",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B9C85",
  },
  button: {
    width: "100%",
    backgroundColor: "#A459D1",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFB84C",
    paddingVertical: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  buttonText: {
    color: "#FFB84C",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
  },
  newAccount: {
    alignItems: "center",
  },
  newText: {
    marginTop: 40,
    maxWidth: "80%",
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  continue: {
    alignItems: "center",
  },
  continueText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B9C85",
  },
  iconsWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  socialIcon: {
    width: 70,
    backgroundColor: "#1B9C85",
    padding: 15,
    borderRadius: 20,
    overflow: "hidden",
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
});

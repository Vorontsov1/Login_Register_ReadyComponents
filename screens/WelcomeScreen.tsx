import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({navigation:{navigate}}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.jpeg")}
        style={styles.bgImage}
      />
      <View style={styles.wrapText}>
        <Text style={styles.text}>Discover Your Dream Job here</Text>
        <Text style={styles.textSecond}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
            onPress={()=>navigate("Login")}
          style={ styles.button }>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={()=>navigate("Register")}
          style={ [styles.button, styles.buttonOutline] }>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    height: windowHeight / 2.5,
    resizeMode: "cover",
    width: windowWidth,
  },
  wrapText: {
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
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
  textSecond: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  button: {
    width: "48%",

    backgroundColor: '#FFB84C',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#A459D1",
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
    color: "#A459D1",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
  },
  buttonOutline: {
    marginLeft: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#A459D1",
  },
});


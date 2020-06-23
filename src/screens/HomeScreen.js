import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
 

  return (
    <View>
      <Text style={styles.text}>Welcome to claws</Text>
      <Button 
      title="Go to components Demo"
      onPress={() => navigation.navigate('Components')}
      
      />
      <Button
        title="GO to LIST Demo"
        onPress={() => navigation.navigate("List")}
      />

    <Button
        title="GO to Imagescreen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
      title="GO to CounterScreen"
      onPress={() => navigation.navigate("CountScreen")}
      />

      <Button
        title="Go to ColorDemo"
        onPress={() => navigation.navigate("ColorPicker")}
      />

      <Button
        title="Go to SquareDemo"
        onPress={() => navigation.navigate("SquareDemo")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

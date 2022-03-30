import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const SwiperGradient = (props) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0.0, y: 0 }}
        end={{ x: 1.5, y: 1.0 }}
        locations={[0, 0.8]}
        colors={["#5A6D9E", "#BECAF5"]}
        style={styles.linearGradient}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            marginLeft: "80%",
            marginTop: 20,
            fontSize: 20,
            color: "#A5258B",
          }}
        >
          VISA
        </Text>
        <View style={{ marginLeft: "10%", marginTop: 20 }}>
          <Text style={{ fontSize: 24 }}>{props.code}</Text>
          <Text style={{ color: "#fff" }}>{props.available}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {props.prices}
            </Text>
            <Text
              style={{ marginRight: "5%", color: "#fff", fontWeight: "bold" }}
            >
              {props.Date}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "90%",
    height: 149,
    marginTop: 20,
    borderRadius: 20,
    // marginLeft: "5%",
  },
});

export default SwiperGradient;

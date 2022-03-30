import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
const COLORS = { TextColor: "#FFF" };

const MyCards = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#000000",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Text
          style={{ color: COLORS.TextColor, fontWeight: "bold", fontSize: 25 }}
        >
          MyCards
        </Text>
        <Swiper
          dot={
            <View
              style={{
                backgroundColor: "rgba(0,0,0,.2)",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
        >
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
          </LinearGradient>
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
          </LinearGradient>
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
          </LinearGradient>
        </Swiper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "89%",
    height: 149,
    marginTop: 20,
    borderRadius: 20,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default MyCards;

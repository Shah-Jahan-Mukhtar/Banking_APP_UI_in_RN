import { View, Text } from "react-native";
import React from "react";

const myCards = () => {
  return (
    <View>
      <View
        style={{
          width: 325,
          height: 178,
          backgroundColor: "#292929",
          borderRadius: 20,
          marginTop: 10,
          marginLeft: 17,
        }}
      >
        <View
          style={{
            height: "50%",
            width: "100%",
            borderBottomWidth: 0.5,
            borderColor: "#EEEEEE",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              justifyContent: "space-around",
            }}
          >
            <Image
              source={props.img1}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 10, alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {props.name}
              </Text>
              <Text style={{ color: "#EEEEEE" }}>{props.code}</Text>
            </View>
            <View style={{ marginLeft: "45%" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {props.price}
              </Text>
              <Text style={{ color: "#EEEEEE" }}>{props.date}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: "50%",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <Image
              source={props.img2}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {props.name2}
              </Text>
              <Text style={{ color: "#EEEEEE" }}>{props.code2}</Text>
            </View>
            <View style={{ marginLeft: "42%" }}>
              <Text style={{ color: "#EEEEEE", fontWeight: "bold" }}>
                {props.price2}
              </Text>
              <Text style={{ color: "#EEEEEE" }}>{props.date2}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default myCards;

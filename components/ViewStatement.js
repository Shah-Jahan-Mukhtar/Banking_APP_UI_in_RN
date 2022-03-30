import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ViewStatement = (props) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          width: "90%",
          height: 267,
          backgroundColor: "#292929",
          borderRadius: 20,
          marginTop: 10,
          marginLeft: 17,
        }}
      >
        <View
          style={{
            height: "33.3%",
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
              // justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#6A6A6A",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="list-alt" size={30} color="#fff" />
            </View>
            <Text
              style={{ color: "#fff", fontWeight: "bold", marginLeft: "10%" }}
            >
              View Statement
            </Text>
            <Icon
              name="angle-right"
              size={35}
              color="#fff"
              style={{ marginLeft: "30%" }}
            />
            <View
              style={{
                marginLeft: 10,
                alignItems: "center",
              }}
            >
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
            height: "33.3%",
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
              // justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#6A6A6A",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="lock" size={30} color="#fff" />
            </View>
            <Text
              style={{ color: "#fff", fontWeight: "bold", marginLeft: "10%" }}
            >
              Change Pin
            </Text>
            <Icon
              name="angle-right"
              size={35}
              color="#fff"
              style={{ marginLeft: "30%" }}
            />
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#6A6A6A",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="minus-circle" size={30} color="#fff" />
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  marginLeft: "10%",
                }}
              >
                Change Pin
              </Text>
            </View>
            <Icon
              name="angle-right"
              size={35}
              color="#fff"
              // style={{ marginLeft: "30%" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewStatement;

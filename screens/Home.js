import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Item from "../components/Item";

const COLORS = { fill: "#414A61", TextColor: "#F9F9F9" };

const ITEMS1 = {
  visa: "Visa Card",
  code: "**3245",
  price: "2200$",
  date: "01/24",
  master: "Master Card",
  code2: "**6539",
  price2: "650$",
  date2: "01/23",
};

const ITEMS2 = {
  grocery: "Grocery",
  price: "-$400",
  isco: "IESCO Bill ",
  price2: "-$120",
};
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.fill,
        alignItems: "center",
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}
      >
        <View style={{ padding: 17 }}>
          <Text style={{ color: "#CECECE", fontSize: 18 }}>Good Morning</Text>
          <Text
            style={{
              color: COLORS.TextColor,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            John Smith
          </Text>
        </View>
        <Image
          source={require("../assets/DP.jpg")}
          style={{ width: 50, height: 50, borderRadius: 50, marginLeft: "38%" }}
        />
      </View>

      <Text
        style={{
          color: COLORS.TextColor,
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        $8640.00
      </Text>
      <Text style={{ color: "#CECECE" }}>Available Balance</Text>
      <View
        style={{
          backgroundColor: "#000000",
          width: "100%",
          height: "100%",
          marginTop: "6%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          //   alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#DBE3F8",
                width: 60,
                height: 60,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Icon name="exchange" size={22} color="#031952" />
            </View>
            <Text style={{ color: "#fff" }}> Transfer</Text>
          </View>
          <View style={{ marginLeft: 20, alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#DBE3F8",
                width: 60,
                height: 60,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Icon name="list" size={22} color="#031952" />
            </View>
            <Text style={{ color: "#fff" }}> Bills</Text>
          </View>
          <View style={{ marginLeft: 20, alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#DBE3F8",
                width: 60,
                height: 60,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Icon name="mobile" size={30} color="#031952" />
            </View>
            <Text style={{ color: "#fff" }}> Recharge</Text>
          </View>
          <View style={{ marginLeft: 20, alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#DBE3F8",
                width: 60,
                height: 60,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Icon name="ellipsis-h" size={30} color="#031952" />
            </View>
            <Text style={{ color: "#fff" }}> More</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",

            marginTop: 10,
            marginLeft: "8%",
          }}
        >
          <Text style={{ color: "#EEEEEE", fontWeight: "bold" }}>My Cards</Text>
          <Text
            style={{
              color: "#EEEEEE",
              fontSize: 13,
              fontWeight: "bold",
              marginLeft: "60%",
              borderBottomWidth: 0.5,
              borderColor: "#EEEEEE",
            }}
          >
            View All
          </Text>
        </View>
        <Item
          name={ITEMS1.visa}
          code={ITEMS1.code}
          prices={ITEMS1.price}
          date={ITEMS1.date}
          name2={ITEMS1.master}
          code2={ITEMS1.code2}
          prices2={ITEMS1.price2}
          date2={ITEMS1.date2}
        />
        <View
          style={{
            flexDirection: "row",

            marginTop: 10,
            marginLeft: "8%",
          }}
        >
          <Text style={{ color: "#EEEEEE", fontWeight: "bold" }}>
            Recent Transactions
          </Text>
          <Text
            style={{
              color: "#EEEEEE",
              fontSize: 13,
              fontWeight: "bold",
              marginLeft: "40%",
              borderBottomWidth: 0.5,
              borderColor: "#EEEEEE",
            }}
          >
            View All
          </Text>
        </View>
        {/* <Item
          name1={ITEMS2.grocery}
          code1={ITEMS2.price}
          prices1={ITEMS2.isco}
          date1={ITEMS2.price2}
        /> */}
      </View>
    </View>
  );
};

export default Home;

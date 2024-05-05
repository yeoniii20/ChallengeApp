import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import Home from "./screen/Home/home";
import Settings from "./screen/Setting/setting";
import Messages from "./screen/Messages/messages";

const Tab = createBottomTabNavigator();

function CustomBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    >
      <Icon
        name="chevron-left"
        type="material-community"
        size={30}
        color="#fff"
      />
    </TouchableOpacity>
  );
}

function GradientHeader() {
  return (
    <LinearGradient
      colors={["#FFAD9F", "#FF9E8B", "#FF8F77"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.5 }}
      style={{ flex: 1 }}
    />
  );
}

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Moirai: require("./assets/fonts/MoiraiOne-Regular.ttf"),
      Samlip: require("./assets/fonts/SDSamliphopangcheTTFOutline.ttf"),
    });
  }

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Fonts are loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerBackground: () => <GradientHeader />,
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Samlip",
            fontSize: 20,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Meet-ing") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Messages") {
              iconName = focused ? "chat" : "chat";
            } else if (route.name === "Setting") {
              iconName = "settings";
            }
            return (
              <Icon name={iconName} type="material" color={color} size={size} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF9E8B",
          inactiveTintColor: "#8b8b8b",
        }}
      >
        <Tab.Screen name="Meet-ing" component={Home} />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Settings}
          options={{
            headerLeft: () => <CustomBackButton />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

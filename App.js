import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Home from "./screen/Home/home";
import Settings from "./screen/Setting/setting";
import Messages from "./screen/Messages/messages";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
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
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

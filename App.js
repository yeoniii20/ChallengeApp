import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
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

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "#f4511e", // 헤더의 배경색
          },
          headerTintColor: "#fff", // 헤더의 글자색
          headerTitleStyle: {
            fontWeight: "bold", // 헤더 타이틀의 글자 스타일
          },
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
          // headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
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

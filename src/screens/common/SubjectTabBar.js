/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import Icon from "../../components/icons";


const { width } = Dimensions.get("screen");

const CAMERA_TAB_ITEM_WIDTH = width * 0.1;
const NORMAL_TAB_ITEM_WIDTH = width * 0.3;


const TabBarIndicator = ({ state }) => {
  const [translateValue, setTranslateValue] = useState(new Animated.Value(CAMERA_TAB_ITEM_WIDTH));

  const [itemWidth, setItemWidth] = useState(NORMAL_TAB_ITEM_WIDTH);

  useEffect(() => {
    slide();
  }, [state]);

  const slide = () => {
    setItemWidth(state.routes[state.index].name === "Camera" ? CAMERA_TAB_ITEM_WIDTH : NORMAL_TAB_ITEM_WIDTH);
    const toValue = state.routes[state.index].name === "Camera"
    ? 0
    : CAMERA_TAB_ITEM_WIDTH + ((state.index - 1) * NORMAL_TAB_ITEM_WIDTH);
    Animated.timing(translateValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: itemWidth,
        borderBottomColor: "white",
        borderBottomWidth: 3,
        bottom: 0,
        transform: [{ translateX: translateValue }]
      }}
    />
  )
}

const SubjectTabBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabBarItemWidth =
          route.name === "Camera"
            ? CAMERA_TAB_ITEM_WIDTH
            : NORMAL_TAB_ITEM_WIDTH;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              width: tabBarItemWidth,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 5,
              height: 40,
            }}
          >
            {route.name === "Camera" ? (
              <Animated.View>
                <Image source={Icon.camera} style={{width : 20, height: 20}} />
              </Animated.View>
            ) : (
              <Animated.Text
                style={{ color:"white", fontWeight: "bold" }}
              >
                {label}
              </Animated.Text>
            )}
          </TouchableOpacity>
        );
      })}
      <TabBarIndicator state={state} />
    </View>
  );
};
export default SubjectTabBar;

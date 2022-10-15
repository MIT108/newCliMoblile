/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import AppRoutes from "../../routes/routeNames";
import {Colors} from "../../components/sharedComponents";
import Icons from "../../components/sharedComponents/icons/icons";

function TeacherNavBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const ImageIcon = (route) => {
          switch (route.name) {
            case AppRoutes.PostScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.postOnActive} /> : <Image style={styles.image} source={Icons.postActive} />;
            case AppRoutes.ProfileScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.userOnActive} /> : <Image style={styles.image} source={Icons.userActive} />;
            {/* case AppRoutes.Tracking:
              return !isFocused ? <Icons.Messages /> : <RedMessageIcon />;
            case AppRoutes.Cart:
              return !isFocused ? (
                <Icons.ShoppingCart />
              ) : (
                <Icons.ShoppingCartRed />
              );
            case AppRoutes.Profile:
              return !isFocused ? <Icons.User /> : <Icons.UserRed />; */}
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            key={`navbaricon-${index}`}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {ImageIcon(route)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TeacherNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.PrimaryColorOne,
    height: 65,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  }
});

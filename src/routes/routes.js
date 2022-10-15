/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppRoutes from "./routeNames";

//auth screens import 
import ChangePasswordScreen from '../screens/Authentication/ChangePasswordScreen'
import LoginScreen from '../screens/Authentication/LoginScreen'
import SentEmailScreen from '../screens/Authentication/SentEmailScreen'
import SlideScreen from '../screens/Authentication/SlideScreen'
import VerificationScreen from '../screens/Authentication/VerificationScreen'
import ListAccountScreen from '../screens/Authentication/ListAccountScreen'
import PostScreen from "../screens/common/PostScreen";
import TeacherNavBar from "../screens/teacher/TeacherNavBar";
import ProfileScreen from "../screens/common/ProfileScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function AuthStack() {
    return (
    <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
        <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={AppRoutes.SentEmailScreen} component={SentEmailScreen} />
        <Stack.Screen name={AppRoutes.SlideScreen} component={SlideScreen} />
        {/* <Stack.Screen name={AppRoutes.ChangePasswordScreen} component={ChangePasswordScreen} />
        <Stack.Screen name={AppRoutes.SentEmailScreen} component={SentEmailScreen} />
        <Stack.Screen name={AppRoutes.VerificationScreen} component={VerificationScreen} /> */}
        
        {/* <Stack.Screen name={AppRoutes.StudentStack} component={StudentStack} /> */}
    </Stack.Navigator>
    );
}


// function StudentStack() {
//     return (
//       <Tab.Navigator
//         screenOptions={{ headerShown: false, gestureEnabled: false }}
//         tabBar={(props) => <NavigationBar {...props} />}
//       >
//         <Tab.Screen name={AppRoutes.BuyerHome} component={BuyerHomeStack} />
//         <Tab.Screen
//           name={AppRoutes.Favorites}
//           component={BuyerFavoriteScreenStack}
//         />
//         <Tab.Screen name={AppRoutes.Tracking} component={SellerTrackingStack} />
//         <Tab.Screen name={AppRoutes.Cart} component={CartStack} />
//         <Tab.Screen name={AppRoutes.Profile} component={BuyerProfileStack} />
//       </Tab.Navigator>
//     );
//   }
  

  function TeacherStack() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        tabBar={(props) => <TeacherNavBar {...props} />}
      >
        <Tab.Screen name={AppRoutes.PostScreen} component={PostScreen} />
        <Tab.Screen name={AppRoutes.ProfileScreen} component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

function RootStack({ userType }) {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            {/* <Stack.Screen name={AppRoutes.ListAccountScreen} component={ListAccountScreen} /> */}
            {userType === "student" ? (
                <>
                {/* <Stack.Screen name={AppRoutes.StudentStack} component={StudentStack} /> */}
                </>
            ) : (
                <>
                <Stack.Screen name={AppRoutes.TeacherStack} component={TeacherStack} />
                </>
            )}
        </Stack.Navigator>
    )
}


export { RootStack, AuthStack };
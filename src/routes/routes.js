/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
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
import ProfileScreen from "../screens/common/ProfileScreen";
import {
  createMaterialTopTabNavigator
} from "@react-navigation/material-top-tabs";


//common imports  
import CallsScreen from "../screens/common/CallsScreen";
import StoriesScreen from "../screens/common/StoriesScreen";
import CameraScreen from "../screens/common/CameraScreen";
import ConversationsScreen from "../screens/common/ConversationsScreen";
import MessagesScreen from "../screens/common/MessagesScreen";
import OnCallScreen from "../screens/common/OnCallScreen";
import ListSubjectScreen from "../screens/common/ListSubjectScreen"
import VideoConferenceScreen from "../screens/common/VideoConferenceScreen"


//teachers import 
import TeacherNavBar from "../screens/teacher/TeacherNavBar";
import TeacherHomeScreen from "../screens/teacher/TeacherHomeScreen";
import ChatTabBar from "../screens/common/ChatTabBar";
import { Colors } from "../components";
import SubjectTabBar from "../screens/common/SubjectTabBar";
import GroupChatScreen from "../screens/common/GroupChatScreen";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();



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
        <Tab.Screen name={AppRoutes.HomeStack} component={HomeStack} />
        <Tab.Screen name={AppRoutes.DiscussionStack} component={DiscussionStack} />
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
            {userType === "teacher" ? (
                <>
                <Stack.Screen name={AppRoutes.TeacherStack} component={TeacherStack} />
                </>
            ) : (
                <>
                {/* <Stack.Screen name={AppRoutes.StudentStack} component={StudentStack} /> */}
                {/* <Stack.Screen name={AppRoutes.TeacherStack} component={TeacherStack} /> */}
                </>
             )}
                <Stack.Screen name={AppRoutes.OnCallScreen} component={OnCallScreen} />
        
        </Stack.Navigator>
    )
}


function ChatStack(){
  return (
    <TopTab.Navigator
      initialRouteName="Conversations"
      tabBar={(props) => <ChatTabBar {...props} />}
      style={{
        backgroundColor: Colors.PrimaryColorOne,
      }}
    >
      <TopTab.Screen name="Camera" component={CameraScreen} />
      <TopTab.Screen
        name="Conversations"
        component={ConversationsScreen}
        options={{
          tabBarLabel: "Disc.",
        }}
      />
      <TopTab.Screen name="Stories" component={StoriesScreen} />
      <TopTab.Screen name="Calls" component={CallsScreen} />
    </TopTab.Navigator>
  );
};


function DiscussionStack() {
  return (
    
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
      initialRouteName={ChatStack}>
        <Stack.Screen name={AppRoutes.ChatStack} component={ChatStack} />
        <Stack.Screen name={AppRoutes.ListSubjectScreen} component={MessagesScreen} />
    </Stack.Navigator>
  )

}

function HomeStack() {
  return (
    
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
      initialRouteName={ChatStack}>
      <Stack.Screen name={AppRoutes.ListSubjectScreen} component={ListSubjectScreen} />
      <Stack.Screen name={AppRoutes.SubjectStack} component={SubjectStack} />
    </Stack.Navigator>
  )
}

function SubjectStack() {
  
  return (
    <TopTab.Navigator
      initialRouteName="Conversations"
      tabBar={(props) => <SubjectTabBar {...props} />}
      style={{
        backgroundColor: Colors.PrimaryColorOne,
      }}
    >
      <TopTab.Screen name="Camera" component={CameraScreen} />
      <TopTab.Screen
        name="Conversations"
        component={GroupChatScreen}
        options={{
          tabBarLabel: "Group",
        }}
      />
      <TopTab.Screen name="Video" component={VideoConferenceScreen} />
      <TopTab.Screen name="Exam" component={CallsScreen} />
    </TopTab.Navigator>
  );
}


export { RootStack, AuthStack };
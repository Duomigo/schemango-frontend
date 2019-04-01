import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import ScheduleScreen from './components/AppStack/Schedule/ScheduleScreen';

import CustomersScreen from './components/AppStack/Customers/CustomersScreen';

import PersonalScreen from './components/AppStack/Personal/PersonalScreen';

import SignInScreen from './components/AuthStack/SignInScreen';
import SignUpScreen from './components/AuthStack/SignUpScreen';
import SplashScreen from './components/AuthStack/SplashScreen';
import AuthLoadingScreen from './components/AuthStack/AuthLoadingScreen';

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen
  },
});

const CustomersStack = createStackNavigator({
  Customers: {
    screen: CustomersScreen
  },
});

const PersonalStack = createStackNavigator({
  Personal: {
    screen: PersonalScreen
  },
});

const AppStack = createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleStack,
      navigationOptions: {
        tabBarLabel: "Schedule",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-calendar" color={tintColor} size={28} />
        )
      }
    },
    Customers: {
      screen: CustomersStack,
      navigationOptions: {
        tabBarLabel: "Customer",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-albums" color={tintColor} size={26} />
        )
      }
    },
    Personal: {
      screen: PersonalStack,
      navigationOptions: {
        tabBarLabel: "Personal",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    swipeEnabled: true,
    initialRouteName: 'Schedule'
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    Splash: {
      screen: SplashScreen
    },
    SignUp: {
        screen: SignUpScreen
    }
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	},
	{
        // tenmporary, switch back to auth loading later
		initialRouteName: 'App',
	}
));

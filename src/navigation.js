import React from 'react';
import {  StackNavigator, TabNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Products from './product';
import ProductsDetail from './product-detail';
import { SideMenu } from './side-menu';

//Tabs
import Tab1 from './tab-1';
import Tab2 from './tab-2';
import Tab3 from './tab-3';

//Alone
import Settings from './settings';

//Auth
import Auth from './auth';
import AuthLoading from './authLoading';

    //Iconos de nuestros Tabs
    const iconTab1 = (<Icon name="user-circle" size={24} color="#999"/>);
    const iconTab2 = (<Icon name="rocket" size={24} color="#999"/>);
    const iconTab3 = (<Icon name="address-card" size={24} color="#999"/>)

    export const Stack = StackNavigator({
        Products: { screen: Products },
        ProductsDetail: { screen: ProductsDetail },
    },
    {
      initialRouteName: 'Products',
    });

    export const Tabs = createBottomTabNavigator({
        Tab1: { 
            screen: Tab1,
            navigationOptions:{
                title: 'Mi Perfil',
                tabBarIcon: iconTab1
            } 
        },
        Tab2: { 
            screen: Tab2 ,
            navigationOptions:{
                title: 'Viajes',
                tabBarIcon: iconTab2
            } 
        },
        Tab3: { 
            screen: Tab3,
            navigationOptions:{
                title: 'Contactos',
                tabBarIcon: iconTab3
            }  
        },
    },
    {
        order: ['Tab1', 'Tab2', 'Tab3'],
        initialRouteName: 'Tab2',
        tabBarOptions:{
            activeTintcolor: '#e91e63',
            labelStyle:{
                fontSize: 16,
            },
            style:{
                backgroundColor: 'black'
            }
        }
    });
  
    export const Drawer = DrawerNavigator({
        Stack: { screen: Stack },
        Tabs: { screen: Tabs },
        Settings: { screen: Settings },
    },{
        drawerWidth: 300,
        contentComponent: SideMenu
    });

    export const SwitchNavigator = createSwitchNavigator({
        Auth: Auth,
        AuthLoading: AuthLoading,
        App: Drawer
    },{
        initialRouteName: 'AuthLoading'
    });

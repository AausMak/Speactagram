import Reaact from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <DrawerNavigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </DrawerNavigator>
    );
};

export default DrawerNavigator;
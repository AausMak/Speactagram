import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'reacct-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatPost from '../screens/CreatePoste';

const tabs = createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tabs.Navigation
            screenOptions={({rout})=>({
                tabBarIcons :({focused,color,size})=>{
                    let iconName;
                    if(iconName==='Feed'){
                        iconName=focused
                        ? 'book'
                        : 'book-outline';
                    }else if(route.name==='CreatePost'){
                        iconName=focused ? 'create':'create-outline';
                    }
                    return <Ionicons name={iconName} color={color} size={size}/>
                },
            })}
            tabBarOptions={{
                activeTintColor:"tomato",
                inactiveTintColor:"gray",
            }}>
                <Tab.Screen Name="Feed" component={Feed}/>
                <Tab.Screen Name="CreatePost" component={CreatePost}/>

        </Tabs.Navigation>
    )
}

export default BottomTabNavigator;
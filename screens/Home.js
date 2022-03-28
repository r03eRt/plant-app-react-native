
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { AddedFriend } from '../components/AddedFriend';
import { NewPlantsSlider } from '../components/NewPlantsSlider';
import { TodaysShare } from '../components/TodaysShare';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

export const Home = ({ navigation }) => {

    // DummyDAta
    const newPlantsList = [
        {
            id: 0,
            name: 'Plant 1',
            image: images.plant1,
            favourite: false
        },
        {
            id: 1,
            name: 'Plant 2',
            image: images.plant2,
            favourite: false
        },
        {
            id: 2,
            name: 'Plant 3',
            image: images.plant3,
            favourite: false
        },
        {
            id: 3,
            name: 'Plant 4',
            image: images.plant4,
            favourite: false
        },
        {
            id: 4,
            name: 'Plant 5',
            image: images.plant5,
            favourite: false
        }
    ];

    const addedFriendList = [
        {
            id: 0,
            img: images.profile1
        },
        {
            id: 1,
            img: images.profile2
        },
        {
            id: 2,
            img: images.profile3
        },
        // {
        //     id: 3,
        //     img: images.profile4
        // },
        // {
        //     id: 4,
        //     img: images.profile5
        // }
    ];


    return (
        <View style={styles.container}>
            {/** new plants */}

            <NewPlantsSlider newPlantsList={newPlantsList} navigation={ navigation }/>
            
            {/** Todays share */}
            <TodaysShare navigation={ navigation }/>
            
            
            {/** Added Friend */}
            <AddedFriend addedFriendList={addedFriendList} navigation={ navigation }/>            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


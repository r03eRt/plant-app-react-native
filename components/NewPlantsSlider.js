import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';

export const NewPlantsSlider = ({ newPlantsList, navigation }) => {
    
    const [newPlants, setNewPlants] = useState(newPlantsList);

     // Rebder new plants
     function renderNewPlants(item, index) {
        return (
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }} >
                <Image 
                    source={item.image}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.23,
                        height: '80%',
                        borderRadius: 15
                    }}
                     
                />
                <View style={{
                    position: 'absolute',
                    bottom: '17%',
                    right: 0,
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10
                }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{ item.name }</Text>
                </View>

                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: 7
                    }}
                    onPress={() => {
                        console.log('Favourite Presed')
                        navigation.navigate('PlantDetail');
                }}
                >
                    <Image
                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline }
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{
            height: '35%',
            backgroundColor: COLORS.white,
            width: '100%',
        }}>
            <View style={{
                flex: 1,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: COLORS.primary
            }}>
                <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>New Plants</Text>
                        <TouchableOpacity
                            onPress={ () => {
                                console.log('Focus on passsword');
                                navigation.navigate('PlantDetail');
                        }}
                        >
                            <Image
                                source={icons.focus}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: SIZES.base }}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={newPlants}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item, index }) => renderNewPlants(item, index) }
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

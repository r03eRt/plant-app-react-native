
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

export const Home = () => {

    // DummyDAta
    const [newPlants, setNewPlants] = useState([
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
    ]);

    // Rebder new plants
    function renderNewPlants(item, index) {

        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
                <Image 
                    source={item.image}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.23,
                        height: '82%',
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
                    onPress={() => console.log('Favourite Presed') }
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
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/** new plants */}
            <View style={{
                height: '30%',
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
                                onPress={ () => console.log('Focus on passsword') }
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
            
            {/** Todays share */}
            <View style={{ height: '50%', backgroundColor: COLORS.lightGray }}></View>
            
            {/** Added Friend */}
            <View style={{ height: '50%', backgroundColor: COLORS.lightGray }}></View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


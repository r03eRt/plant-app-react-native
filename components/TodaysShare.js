import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images, SIZES, FONTS } from '../constants';

export const TodaysShare = ({ navigation }) => {
    
    return (
        <View style={{ height: '45%', backgroundColor: COLORS.lightGray }}>
            <View style={{
                flex: 1,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: COLORS.white
            }}>
                <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Today's Share</Text>
                        <TouchableOpacity>
                            <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                
                    <View style={{ flexDirection: 'row', height: '85%', marginTop: SIZES.base }}>
                        <View style={{ flex:1, }}>
                            
                            <TouchableOpacity style={{ flex: 1,  marginRight: SIZES.base / 2 }}
                            onPress={() => {
                                navigation.navigate('PlantDetail')
                            }}
                            >
                                <Image 
                                    source={images.plant5}
                                    resizeMode="cover"
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        borderRadius: 20
                                }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 1, marginTop: SIZES.font, marginRight: SIZES.base / 2 }}
                            onPress={() => {
                                navigation.navigate('PlantDetail')
                            }}>
                                <Image 
                                    source={images.plant5}
                                    resizeMode="cover"
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        borderRadius: 20
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1.3 }}>
                            <TouchableOpacity style={{ flex: 1, marginLeft: SIZES.base / 2  }}
                            onPress={() => {
                                navigation.navigate('PlantDetail')
                            }}>
                                <Image 
                                    source={images.plant7}
                                    resizeMode="cover"
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        borderRadius: 20
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

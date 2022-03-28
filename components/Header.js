import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../constants';

export const Header = ({ navigation }) => {
    return (
        <View style={{
            position: 'absolute',
            top: 40,
            left: SIZES.padding,
            right: SIZES.padding,
        }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: 'rgba(255,255,255, 0.5)',
                    }}
                    onPress={() => { navigation.navigate('Home')}}>
                    
                        <Image
                            source={icons.back}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ 
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
                onPress={() => { console.log('Focus on Pressed');}}>
                    <Image
                        source={icons.focus}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25                       
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                marginTop: '1%'
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>Glory Mantas</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

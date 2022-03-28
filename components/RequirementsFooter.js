import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../constants';

export const RequirementsFooter = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', marginTop: SIZES.padding * 2, paddingVertical: SIZES.padding }}>
            <TouchableOpacity style={{
                flex: 1,                
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                backgroundColor: COLORS.primary
            }} onPress={() => { console.log('Take Action') }}>            
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Take Action</Text>
                <Image
                    source={icons.chevron}
                    resizeMode="contain"
                    style={{
                        marginLeft: SIZES.padding,
                        width: 20,
                        height: 20,
                    }}
                />
            </TouchableOpacity>
            <View style={{ 
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: SIZES.padding,
            }}>
                    <Text>Almost 2 weeks of growing time</Text>
                    <Image
                        source={icons.downArrow}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.secondary,
                            marginLeft: SIZES.base,  
                            width: 20,
                            height: 20,
                        }} 
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})
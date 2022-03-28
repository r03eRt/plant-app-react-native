import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

export const Requirements = () => {
    return (
        <View style={{ flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
            <RequirementDetail
                icon={icons.sun}
                label="Sunlight"
                detail="15ºC"
            />
             <RequirementDetail
                icon={icons.drop}
                label="Sunlight"
                detail="15ºC"
            />
             <RequirementDetail
                icon={icons.temperature}
                label="Sunlight"
                detail="15ºC"
            />
             <RequirementDetail
                icon={icons.garden}
                label="Sunlight"
                detail="15ºC"
            />
             <RequirementDetail
                icon={icons.seed}
                label="Sunlight"
                detail="15ºC"
            />
        </View>
    );
}

export const RequirementDetail = ({ icon, label, detail }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: SIZES.padding/2 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 30,
                        height: 30,                        
                    }}
                />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h3 }}>{ label }</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'flex-end',     
                alignSelf: 'center',       
            }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.h3 }} >{detail}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})
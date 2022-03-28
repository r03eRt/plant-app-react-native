import React from 'react';
import {View, StyleSheet} from 'react-native';
import { COLORS, icons, SIZES, Image } from '../constants';
import { RequirementBar } from '../components/RequirementBar';

export const RequirementsBar = () => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            justifyContent: 'space-between'
        }}>
            <RequirementBar
                icon={icons.sun}
                barPercentage="50%"
            />
            <RequirementBar
                icon={icons.drop}
                barPercentage="80%"
            />
            <RequirementBar
                icon={icons.temperature}
                barPercentage="50%"
            />
            <RequirementBar
                icon={icons.garden}
                barPercentage="70%"
            />
            <RequirementBar
                icon={icons.seed}
                barPercentage="40%"
            />
        </View>
    );
}


const styles = StyleSheet.create({})
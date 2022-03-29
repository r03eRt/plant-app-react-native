import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import { icons, images, COLORS, SIZES, FONTS } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RequirementsBar } from '../components/RequirementsBar';
import { Requirements } from '../components/Requirements';
import { RequirementsFooter } from '../components/RequirementsFooter';
import { Header } from '../components/Header';

export const PlantDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/** Banner Photo */}
            <View style={{ height: '35%' }}>
                <Image
                    source={images.bannerBg}
                    resizeMode="cover"
                    style={{ 
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
            {/** Requirements */}
            <View style={{
                flex: 1,
                marginTop: -40,
                backgroundColor: COLORS.lightGray,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                paddingVertical: SIZES.padding
            }}>
                <Text style={{
                    paddingHorizontal: SIZES.padding,
                    color: COLORS.secondary, ...FONTS.h1
                }}>Requirements</Text>
                
                <RequirementsBar/>
                
                <Requirements/>

                <RequirementsFooter/>
            </View>

            <Header navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { COLORS, FONTS, SIZES, images, icons } from '../constants';

export const AddedFriend = ({ addedFriendList, navigation }) => {

    const [friendList, setFriendList] = useState(addedFriendList);
    return (
        <View style={{ height: '20%', backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                    <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Added Friends</Text>
                    <Text style={{ color: COLORS.secondary, ...FONTS.body }}>5 total</Text>
                    {/** Friends */}
                    <View style={{ flexDirection: 'row', height: '60%'}}>
                        <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center', backgroundColor: 'yellow' }}>
                            <Friends friendList={friendList}/>
                        </View>
                        {/** Add Friends */}
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add new</Text>
                            <TouchableOpacity
                                style={{
                                    marginLeft: SIZES.base,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.gray
                                }}
                                onPress={() => { 
                                    console.log('Add friend on pressed')
                                    navigation.navigate('PlantDetail')
                                 }}
                            >
                                <Image
                                    source={icons.plus}
                                    resizeMode="contain"
                                    style={{ 
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})


export const Friends = ({ friendList }) => {
    if(friendList.length == 0) {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>No friends</Text>
            </View>
        )
    } else if (friendList.length <= 3 ) {
        return(
            friendList.map((friend, index) => {
                <View
                    key={`friend-${index}`}
                    style={ index == 0 ? {} : { marginLeft: -20 }}
                >
                    <Image
                        resizeMode="cover"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            borderWidth: 3,
                            borderColor: COLORS.primary,
                            backgroundColor: 'blue'
                        }}
                    />
                </View>
            })
        );
    } else {
        return(
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    friendList.map((friend, index) => {
                        if( index <= 2) {
                            return (
                                <View>
                                    <Image
                                        source={friend.img}
                                        resizeMode="cover"
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 3,
                                            borderColor: COLORS.primary,
                                        }}
                                    />
                                </View>
                            )
                        }
                    })
                }
                <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+ {friendList.length}</Text>
            </View>
        )
    }
}
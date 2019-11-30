import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const GoBanner = () => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ position: 'relative' }}>
        <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
        <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderradius: 6 }}></View>
        <View style={{ height: 15, width: 60, position: 'absolute', top: 16, left: 16 }} >
          <Image source={require('../../../assets/logo/white.png')} style={{ width: '100%', height: 200, rezideMode: 'contain', flex: 1 }} />
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 8 }}>Free GO-FOOD Voucher</Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: '#fff' }}>Quick before they run out!</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 12 }}>
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4 }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
    </View>
  )
}

export default GoBanner;
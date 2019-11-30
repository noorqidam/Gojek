import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import NavBar from '../../../containers/organisms/NavBar';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <SearchFeature />
          <HomeGoPay />
          <HomeMainFeature />
          <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>
          <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>
        <NavBar />
      </View >
    )
  }
}

export default Home;
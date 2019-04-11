//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'

import styles from './styles'
import { navigatorStyle } from '@global/pageStyle'
import I18n from '@language'
import * as THEME from '@theme'

const iBackground = require('@assets/images/home/background.png')
// create a component
class homeScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch (event.id) {
      case 'willDisappear':
        return this.props.navigator.pop()
      default:
        return null
    }
  }

  renderTopPart = () => {
    return (
      <View style={styles.topPart}>
        <View style={{ flex: 257 }}>
        </View>
        <View style={{ flex: 566 }}>
          <View style={{ flex: 129 }}>
          </View>
          <View style={{ flex: 170 }}>
            <Image source={require('@assets/images/common/mark.png')} style={THEME.STYLES.image} />
          </View>
          <View style={{ flex: 129 }}>
          </View>
        </View>
        <View style={{ flex: 257 }}>
        </View>
      </View>
    )
  }

  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={I18n.t('HOME_SCREEN_TITLE')} navBar={true} backButton={false} background={false}>
        {this.renderTopPart()}
        <View style={styles.mainPart}>
          <Image source={iBackground} style={styles.background} />
          <View style={{ flex: 3, flexDirection: 'row', marginTop: 20 }}>
            <View style={{ flex: 1, marginLeft: 20 }}>
              <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'transparent' }}>{'87%'}</Text>
              <Text style={{ fontSize: 17, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_SUCCESS_RATE')}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 80 }}>
              <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'transparent' }}>{'84%'}</Text>
              <Text style={{ fontSize: 17, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_SIGNAL_ACCURACY')}</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_DAILY')}</Text>
            <Text style={{ fontSize: 17, color: 'white', backgroundColor: 'transparent' }}>{I18n.t('HOME_SCREEN_FREQUENCY')}</Text>
          </View>
        </View>
      </BaseScreen>
    );
  }
}

//make this component available to the app
export default homeScreen;

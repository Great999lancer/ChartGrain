//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// import Component
import BaseScreen from '../../common/baseScreen'
import Column from '../../../components/settingColumn'

import * as SCREEN from '../../../global/screenName'
import styles from './styles'
import I18n from '@language'

const iAbout = require('@assets/images/setting/aboutCompany.png')
const iLanguage = require('@assets/images/setting/language.png')
const iNotification = require('@assets/images/setting/notifications.png')
const iSubscription = require('@assets/images/setting/subscriptions.png')
const iRisk = require('@assets/images/setting/risk.png')
const iPrivacy = require('@assets/images/setting/privacyPolicy.png')
const iSignal = require('@assets/images/setting/addSignal.png')
const iEvent = require('@assets/images/setting/addEvent.png')
const iContact = require('@assets/images/setting/contact.png')
const iSignout = require('@assets/images/setting/signout.png')
// create a component
class settingScreen extends Component {

  constructor(props) {
    super(props)
    this.props.navigator.toggleNavBar({
      to: 'hidden',
      animated: false
    })
  }
  render() {
    return (
      <BaseScreen navigator={this.props.navigator} title={'Setting'} navBar={true} backButton={false}>
        <ScrollView>
        <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
          <Column icon={iAbout} title={I18n.t('SETTING_SCREEN_ABOUT')} onPress={() => this.onNavigateAbout()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iLanguage} title={I18n.t('SETTING_SCREEN_LANGUAGE')} onPress={() => this.onNavigateLanguage()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iNotification} title={I18n.t('SETTING_SCREEN_NOTIFICATION')} onPress={() => {}} additional={'switch'}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iSubscription} title={I18n.t('SETTING_SCREEN_SUBSCRIPTION')} onPress={() => this.onNavigateSubscription()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iRisk} title={I18n.t('SETTING_SCREEN_RISK_DISCLAIMER')} onPress={() => this.onNavigateRisk() }/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iPrivacy} title={I18n.t('SETTING_SCREEN_PRIVACY_PLICY')} onPress={() => this.onNavigatePrivacy()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iSignal} title={I18n.t('SETTING_SCREEN_ADD_SIGNAL')} onPress={() => this.onNavigateAddSignal()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iEvent} title={I18n.t('SETTING_SCREEN_ADD_EVENT')} onPress={() => this.onNavigateAddEvent()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iContact} title={I18n.t('SETTING_SCREEN_CONTACT_US')} onPress={() => this.onNavigateContactUs()}/>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Column icon={iSignout} title={I18n.t('SETTING_SCREEN_SIGN_OUT')} onPress={() => this.onSignout()}/>
        </View>
        </ScrollView>
      </BaseScreen>
    );
  }

  onNavigateAbout = () => {
    this.props.navigator.push({
      screen: SCREEN.ABOUT_SCREEN
    })
  }

  onNavigateLanguage = () => {
    this.props.navigator.push({
      screen: SCREEN.LANGUAGE_SCREEN
    })
  }

  onNavigateSubscription = () => {
    this.props.navigator.push({
      screen: SCREEN.SUBSCRIPTION_SCREEN
    })
  }

  onNavigateRisk = () => {
    this.props.navigator.push({
      screen: SCREEN.RISK_SCREEN
    })
  }

  onNavigatePrivacy = () => {
    this.props.navigator.push({
      screen: SCREEN.PRIVACY_SCREEN
    })
  }

  onNavigateAddSignal = () => {
    this.props.navigator.push({
      screen: SCREEN.ADD_SIGNAL_SCREEN
    })
  }

  onNavigateAddEvent = () => {
    this.props.navigator.push({
      screen: SCREEN.ADD_EVENT_SCREEN
    })
  }

  onNavigateContactUs = () => {
    this.props.navigator.push({
      screen: SCREEN.CONTACT_US_SCREEN
    })
  }

  onSignout = () => {
    this.props.appChange('login')
  }
}
//make this component available to the app
export default settingScreen;
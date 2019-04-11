//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'

// import Component
import NavBar from '@components/navBar'
import AuthInput from '@components/AuthInput'
import Button from '@components/Button'

import { navigatorStyle } from '@global/pageStyle'

import styles from './styles'
import I18n from '@language'
import * as THEME from '@theme'
import * as SCREEN from '../../../global/screenName'
const iMail = require('@assets/images/common/mail.png')
const iPwd = require('@assets/images/common/password.png')
// create a component
class loginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rememberPass: false,
    }
  }

  renderTopPart = () => {
    return (
      <View style={styles.topPart}>
        <View style={{ flex: 257 }}>
        </View>
        <View style={{ flex: 566 }}>
          <View style={{ flex: 254 }}>
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

  renderMainPart = () => {
    return <View style={styles.mainPart} >
      <View style={{ flex: 3 }}>
        <AuthInput style={{ width: '80%', marginTop: 20 }} image={iMail} placeholder={I18n.t('SIGNIN_SCREEN_USERNAME')}
          textStyle={[]}
          onRefs={c => this.username = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => { }}
        />
        <AuthInput style={{ width: '80%', marginTop: 10 }} image={iPwd} placeholder={I18n.t('SIGNIN_SCREEN_PASSWORD')}
          textStyle={[]}
          isPassword={true}
          nextType={'done'}
          onRefs={c => this.username = c}
          imageStyle={{ tintColor: '#f4a41a' }}
          onNext={() => this.onLogin()}
        />
        {this.renderRemember()}
        {this.renderCreateAccount()}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={[THEME.COMMON.button]}
          color={'#f4a41a'}
          textStyle={{ color: 'white' }} title={I18n.t('SIGNIN_SCREEN_SIGNIN')}
          onPress={() => this.onLogin()}
        />
      </View>
    </View>
  }

  renderCreateAccount = () => {
    return (
      <View style={{ marginTop: 40, width: '80%', alignSelf: 'center' }}>
        <TouchableOpacity onPress={() => { }} style={{}}>
          <View>
            <Text style={[{ color: 'white', fontSize: 18, textDecorationLine: 'underline' }]}>{I18n.t('SIGNIN_SCREEN_CREATEACCOUNT')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderRemember = () => {
    return (
      <View style={styles.rememberPart}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <CheckBox
            style={styles.rememberMe}
            onClick={() => { }}
            // onClick={() => this.onRememberChange()}
            rightText={I18n.t('SIGNIN_SCREEN_REMEMBER_ME')}
            rightTextStyle={{ color: 'white' }}
            checkBoxColor={'#f4a41a'}
            isChecked={this.state.rememberPass} />
        </View>
        <TouchableOpacity onPress={() => this.onNavigateForgot()}>
          <Text style={[{ color: 'white' }]}>{I18n.t('SIGNIN_SCREEN_FORGOT')}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTopPart()}
        <NavBar title={'Login'} onBack={() => this.onBack()} />
        {this.renderMainPart()}
      </View>
    );
  }

  onBack = () => {
    this.props.navigator.pop()
  }

  onLogin = () => {
    this.props.appChange('main')
  }

  onNavigateForgot = () => {
    this.props.navigator.push({
      screen: SCREEN.FORGOT_SCREEN
    })
  }
}

loginScreen.navigatorStyle = navigatorStyle
//make this component available to the app
export default loginScreen;

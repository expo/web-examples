import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';
import { Localization } from 'expo';
import firebase from 'firebase';

const TEST_NUMBER = '+1 650-555-3434';
const TEST_CODE = '100000';

const successImageUri =
  'https://appjs.co/wp-content/uploads/2018/08/evan-bacon-1-458x458.jpg';
let recaptchaVerifier;
export default class PhoneAuthTest extends Component {
  state = {
    user: undefined,
    message: '',
    codeInput: TEST_CODE,
    phoneNumber: TEST_NUMBER,
    confirmationResult: null,
  };

  componentDidMount() {
    if (!firebase.apps.length) {
      const config = {
        apiKey: 'AIzaSyAk9Ls-PWBk-qNHrC4IFw4W0qEnVYjnv70',
        authDomain: 'fir-35414.firebaseapp.com',
        databaseURL: 'https://fir-35414.firebaseio.com',
        projectId: 'fir-35414',
        storageBucket: 'fir-35414.appspot.com',
        messagingSenderId: '157851373513',
      };
      firebase.initializeApp(config);
    }

    firebase.auth().languageCode = Localization.locale;

    const container = document.createElement('div');
    container.style.setProperty('display', 'none');
    container.setAttribute('id', 'recaptcha-container');
    // Visible Recaptcha
    document.body.appendChild(container);

    // Invisible Recaptcha
    recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: response => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log('Got Phone Auth Response: ', response);
        },
      },
    );

    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: TEST_CODE,
          phoneNumber: TEST_NUMBER,
          confirmationResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = async () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

    const appVerifier = recaptchaVerifier;

    try {
      const confirmationResult = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier);
      console.log('SMS sent.', confirmationResult);
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.setState({ confirmationResult, message: 'Code has been sent!' });
    } catch (error) {
      // Error; SMS not sent
      // ...
      this.setState({
        message: `Sign In With Phone Number Error: ${error.message}`,
      });
      alert(error.message);
      console.error(error);

      const widgetId = await recaptchaVerifier.render();
      // grecaptcha.reset(widgetId);
    }
  };

  confirmCode = async () => {
    const { codeInput, confirmationResult } = this.state;

    if (confirmationResult && codeInput.length) {
      try {
        const user = await confirmationResult.confirm(codeInput);
        console.log('User signed in successfully.', user);
        // User signed in successfully.
        this.setState({ message: 'Code Confirmed!' });
      } catch (error) {
        console.log(`User couldn't sign in (bad verification code?)`, error);
        // User couldn't sign in (bad verification code?)
        this.setState({ message: `Code Confirm Error: ${error.message}` });
      }
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <Text>Enter phone number:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'Phone number ... '}
          value={phoneNumber}
        />
        <Button title="Sign In" color="green" onPress={this.signIn} />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) {
      return null;
    }

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>
        {message}
      </Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button
          title="Confirm Code"
          color="#841584"
          onPress={this.confirmCode}
        />
      </View>
    );
  }

  render() {
    const { user, confirmationResult } = this.state;
    if (user === undefined) {
      return null;
    }
    return (
      <View style={{ flex: 1 }}>
        {!user && !confirmationResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmationResult && this.renderVerificationCodeInput()}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Image
              source={{ uri: successImageUri }}
              style={{ width: 100, height: 100, marginBottom: 25 }}
            />
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
          </View>
        )}
      </View>
    );
  }
}

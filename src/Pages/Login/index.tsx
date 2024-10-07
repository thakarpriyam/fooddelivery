import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
} from 'react-native';
import React from 'react';
import CustomButton from '../../Components/customButton/CustomButton';
import CustomInput from '../../Components/customInput/CustomInput';
import styles from './indexStyles';
import getColors from '../../Themes/Color';
import EText from '../../Components/EText';

const colors = getColors('custom');

const Login = ({navigation}: any) => {
  return (
    <View style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.logoCont}>
          <Image
            tintColor={colors.main}
            style={styles.img}
            source={require('../../assets/Images/dinelogo.png')}
          />
        </View>

        <View style={styles.loginCont}>
          <EText style={styles.loginTxt}>Login to Your Account</EText>
        </View>

        <View>
          <CustomInput
            // inputConfig={{
            //   maxLength: 10,
            //   keyboardType: 'decimal-pad',
            //   value: inputs.phone.value,
            //   onChangeText: inputChangedHandler.bind(this, 'phone'),
            // }}
            // isError={!inputs.phone.isValid}
            // errorMsg={inputs.phone.errorMsg}
            maxL={10}
            keyboard="numeric"
            placeholder="Phone"
            img={require('../../assets/Images/phone.png')}
          />
          <CustomInput
            placeholder="Password"
            img={require('../../assets/Images/password.png')}
            isPassword={true}
            // inputConfig={{
            //   value: inputs.pin.value,
            //   onChangeText: inputChangedHandler.bind(this, 'pin'),
            // }}
            // isError={!inputs.pin.isValid}
            // errorMsg={inputs.pin.errorMsg}
          />
          <CustomButton
            onBtnPress={() => {
              Keyboard.dismiss();
              // validation();
            }}
            text={'Login'}
            // loading={loading}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPsw')}
          style={styles.forgotPassPress}>
          <EText style={styles.forgotPassTxt}>Forgot the password?</EText>
        </TouchableOpacity>

        <View style={styles.noAcntCont}>
          <EText style={styles.noAcntTxt}>Don't have an account ?</EText>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <EText style={styles.signUpTxt}>Sign Up</EText>
          </TouchableOpacity>
        </View>

        {/* <LoginModal
          isVisible={deviceModal}
          onClose={() => setDeviceModal(false)}
          onYesPress={() => handleDeviceCheck()}
          loading={isLoading}
        /> */}
      </ScrollView>
      {/* <Message
        visible={showError}
        isSuccess={success}
        message={errorMsg}
        onDismissSnackBar={() => setShowError(false)}
      /> */}
    </View>
  );
};

export default Login;

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import EText from '../../Components/EText';
import getColors from '../../Themes/Color';
import CustomInput from '../../Components/customInput/CustomInput';
import styles from './indexStyles';
import CustomButton from '../../Components/customButton/CustomButton';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import InputImage from '../../Components/inputImage/InputImage';
import CustomHeader from '../../Components/customHeader/CustomHeader';

const colors = getColors('custom');

const Register = ({navigation}: any) => {
  const [showImgErr, setShowImgErr] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState(null);

  const photoChoose = async () => {
    try {
      let options: any = {
        mediaType: 'photo',
        quality: 1,
      };
      await launchImageLibrary(options, (response: any) => {
        try {
          setShowImgErr(false);
          setProfileImage(null);
          setToastMessage('');
          if (response.didCancel) {
            setIsError(true);
            setToastMessage('Image Not Selected');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            setIsError(true);
            setToastMessage('Camera Not Available');
            return;
          } else if (response.errorCode == 'permission') {
            setIsError(true);
            setToastMessage('This Application Needs Camera Permission');
            return;
          } else if (response.errorCode == 'others') {
            setIsError(true);
            setToastMessage(response.errorMessage);
            return;
          }
          const responseResult = response.assets[0];
          const file = responseResult;
          if (
            responseResult.type !== 'image/jpeg' &&
            responseResult.type !== 'image/jpg' &&
            responseResult.type !== 'image/png'
          ) {
            setIsError(true);
            setToastMessage('Only .jpeg, .jpg, and .png formats are supported');
            return;
          }
          if (responseResult.fileSize > 2000000) {
            setIsError(true);
            setToastMessage('Image size must be 2 MB or less');
            return;
          }
          try {
            async function getImgInBase64() {
              const base64Image: string = await RNFS.readFile(
                responseResult.uri,
                'base64',
              );
              const formattedImage: any = `data:${responseResult.type};base64,${base64Image}`;
              setProfileImage(formattedImage);
            }
            getImgInBase64();
          } catch (error) {
            setIsError(true);
            setToastMessage('Error reading image file');
          }
          setImage(file.uri);
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <CustomHeader
        isBackArrow={true}
        onBackPress={() => navigation.goBack()}
        isTitle={true}
        titleText="Register"
      />
      <ScrollView style={styles.insideMain}>
        <View style={styles.inputCont}>
          <CustomInput
            placeholder="First Name"
            // inputConfig={{
            //   value: input.firstName.value,
            //   onChangeText: inputChangedHandler.bind(this, 'firstName'),
            // }}
            // isError={!input.firstName.isValid}
            // errorMsg={input.firstName.message}
          />

          <CustomInput
            placeholder="Last Name"
            // inputConfig={{
            //   value: input.lastName.value,
            //   onChangeText: inputChangedHandler.bind(this, 'lastName'),
            // }}
            // isError={!input.lastName.isValid}
            // errorMsg={input.lastName.message}
          />

          <CustomInput
            placeholder="Phone"
            keyboard="numeric"
            maxL={10}
            // inputConfig={{
            //   maxLength: 10,
            //   value: input.phone.value,
            //   onChangeText: inputChangedHandler.bind(this, 'phone'),
            // }}
            // isError={!input.phone.isValid}
            // errorMsg={input.phone.message}
          />

          <CustomInput
            placeholder="Password"
            maxL={15}
            isPassword={true}
            // inputConfig={{
            //   value: input.password.value,
            //   onChangeText: inputChangedHandler.bind(this, 'password'),
            // }}
            // isError={!input.password.isValid}
            // errorMsg={input.password.message}
          />

          <CustomInput
            placeholder="Email"
            // inputConfig={{
            //   value: input.email.value,
            //   onChangeText: inputChangedHandler.bind(this, 'email'),
            // }}
            // isError={!input.email.isValid}
            // errorMsg={input.email.message}
          />

          <TouchableOpacity></TouchableOpacity>

          <TouchableOpacity
            onPress={() => photoChoose()}
            style={styles.photoChoose}>
            <InputImage imageUrl={image} isImageErr={showImgErr} />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 15}}>
          <CustomButton
            text="SignUp"
            // onBtnPress={validation}
            // loading={loading}
            // disabled={loading}
          />
        </View>
      </ScrollView>

      {/* {showMsg && (
        <Message
          isSuccess={isSuccess}
          message={message}
          visible={showMsg}
          onDismissSnackBar={() => {
            setShowMsg(false);
          }}
        />
      )} */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: colors.primary,
//     fontSize: 20,
//   },
// });

export default Register;

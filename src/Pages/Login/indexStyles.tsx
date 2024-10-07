import {StyleSheet} from 'react-native';
import getColors from '../../Themes/Color';

const colors = getColors('custom');

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.secondbgcolor, paddingHorizontal: 20},
  logoCont: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginTop: 50,
  },
  img: {height: '100%', width: '100%'},
  loginCont: {alignSelf: 'center', marginBottom: 100},
  loginTxt: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
    fontFamily: 'Lato-Regular',
  },
  forgotPassPress: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  forgotPassTxt: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
  },
  noAcntCont: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 10,
  },
  noAcntTxt: {
    color: colors.normaltext,
    fontSize: 14,
    marginRight: 5,
    marginTop: 3,
    fontFamily: 'Lato-Regular',
  },
  signUpTxt: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
  },
});

export default styles;

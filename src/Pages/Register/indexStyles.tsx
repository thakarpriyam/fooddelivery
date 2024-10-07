import {StyleSheet} from 'react-native';
import getColors from '../../Themes/Color';

const colors = getColors('custom');

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.secondbgcolor},
  insideMain: {paddingHorizontal: 20},
  inputCont: {marginTop: 15},
  photoChoose: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 15,
  },
});

export default styles;

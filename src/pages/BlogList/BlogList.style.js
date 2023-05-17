import {StyleSheet} from 'react-native';
import colors from '../../styles/color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  button_container: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  button: {
    fontSize: 50,
    backgroundColor: colors.orange,
    margin: 5,
    width: 100,
    borderRadius: 5,
  },
  button_title: {
    textAlign: 'center',
    color: colors.dark_background,
    padding: 6,
    fontWeight: 'bold',
  },
  page: {
    color: colors.dark_background,
    alignSelf: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    borderWidth: 0.5,
    padding: 3,
    borderColor: colors.dark_background,
    borderRadius: 5,
  },
});

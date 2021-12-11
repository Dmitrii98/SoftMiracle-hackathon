import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#C4C4C4',
    marginHorizontal: 15,
    height: 150,
    borderRadius: 5,
    position: 'relative',
    marginBottom: 5,
  },
  textBox: {
    position: 'absolute',
    top: '65%',

    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  textTime: {
    marginRight: 10,
  },
  textName: {
    marginLeft: 5
  }
});

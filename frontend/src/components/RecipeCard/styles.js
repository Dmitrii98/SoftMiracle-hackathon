import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#C4C4C4',
    marginHorizontal: 15,
    height: 150,
    borderRadius: 5,
    position: 'relative',
    marginBottom: 15,
  },
  textBox: {
    position: 'absolute',
    top: '72%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(93, 90, 102, 0.8)',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  textName: {
    marginLeft: 5,
    color: '#fff'
  },
  iconAndText: {
    flexDirection: 'row',
    marginRight: 10,
  },
  timeIcon: {
    marginRight: 10
  },
  timeText: {
    color: '#fff',
    marginTop: 1
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 5,
  }
});

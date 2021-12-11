import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  recipe: {
    marginTop: 30

  },
  container: {
    backgroundColor: '#F1F7FF',
    position: 'relative',
    height: '100%'
  },
  productImage: {
    justifyContent: 'center',
    marginLeft: '12%',
    marginBottom: 20,
    position: 'absolute',
    zIndex: 100
  },
  productDescription: {
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#fff',
    marginTop: '40%',
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    marginHorizontal: 4
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginHorizontal: 15,
    width: '80%'
  },
  titleAndTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  timeText: {
    color: '#A7A7A7',
    marginTop: 1
  },
  backButton: {
    marginHorizontal: 15
  },
  iconAndText: {
    flexDirection: 'row',
  },
  timeIcon: {
    marginRight: 10
  },
  titleAndButton: {
    width: '100%',
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});

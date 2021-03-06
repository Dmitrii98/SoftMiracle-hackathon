import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  recipe: {
    marginTop: 20
  },
  container: {
    backgroundColor: '#F1F7FF',
    position: 'relative',
    height: '100%'
  },
  productImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    zIndex: -1
  },
  productDescription: {
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: '#fff',
    marginTop: '33%',
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 4,
    width: 230
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginHorizontal: 15,
    width: '80%'
  },
  titleAndTime: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center'
  },
  timeText: {
    color: '#A7A7A7',
    marginTop: 1
  },
  backButton: {
    marginHorizontal: 15,
    marginTop: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 50
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
    marginBottom: 40
  },
  titlePreparing: {
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 20,
    marginBottom: 30
  }
});

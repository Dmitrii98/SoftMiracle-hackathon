import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginHorizontal: 15,
  },
  carousel: {
    width: '100%',
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',

  },
  image: {
    aspectRatio: 2,
    width: 200,
    height: 74,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  lowerLeft: {},
  titleText: {
    bottom: 5,
    marginHorizontal: 10,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'normal',
    color: '#000000',
    marginBottom: 10
  },
  descriptionText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  button: {
    width: '40%',
    marginLeft: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#585B60',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#585B60',
  },
  footer: {
    marginTop: 20,
    marginHorizontal: 10,
    borderColor: '#A0A0A0',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
  },
  header: {
    marginBottom: 24,
    paddingTop: 30,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000'
  },
  logo: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2127',
    marginLeft: 5

  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#C4C4C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
});

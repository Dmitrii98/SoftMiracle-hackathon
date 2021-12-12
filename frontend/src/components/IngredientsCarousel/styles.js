import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginHorizontal: 15,
  },
  carousel: {
    width: '100%',
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#EAECEE',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    height: 470,
    marginBottom: 30
  },
  itemCheckBox: {
    margin: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#EBEBEB',
    paddingLeft: 12
  },
  higherContainer: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  itemWeight: {
    fontSize: 14,
    lineHeight: 22,
    color: '#8E67E4'
  },
  itemFooter: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  vendor: {
    paddingHorizontal: 11,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    lineHeight: 22,
  },
  vendorRed: {
    backgroundColor: '#FFD7D7',
    color: '#FF0000',
  },
  vendorGreen: {
    backgroundColor: '#EAFCD4',
    color: '#1AB75C',
  },
  itemPrice: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 22,
    color: '#1B1B1B'
  },
  lowerLeft: {
    width: '100%',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000'
  },
  descriptionText: {
    fontSize: 14,
    color: '#A0A0A0',
    fontWeight: '300'
  },
});

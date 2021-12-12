import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    backgroundColor: '#EFEFEF',
    opacity: 0.1
  },
  product: {
    paddingVertical: 30,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  productImage: {
    width: 50,
    height: 60,
    marginRight: 20
  },
  productTitle: {
    fontSize: 16,
    width: 200,
    marginBottom: 10
  },
  price: {
    color: '#6925FF',
    fontSize: 20
  },
  productInfo: {
    marginBottom: 30
  },
  howToBuy: {
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 18
  },
  picker: {
    width: 182,
    marginHorizontal: 20,
    backgroundColor: '#F8F8F8',
    marginBottom: 40
  },
  sumAndPrice: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  sum: {
    fontSize: 20
  },
  sumPrice: {
    fontSize: 20,
    color: '#8E67E4'
  },
  count: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#bbb9b9'
  },
  titleAndPrice: {
  marginRight: 10
}
});

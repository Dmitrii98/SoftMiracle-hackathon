import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backButtonBox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 40
  },
  backButton:{
    marginHorizontal: 15,
  },
  modal: {
    textAlign: 'center'
  },
  scrollBox: {
    marginBottom: 80
  },
  container: {
    width: '100%',
    marginHorizontal: 100,
    marginVertical: 20
  },
  containerFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    marginBottom: 10,
    width: 200,
    height: 200,
    aspectRatio: 1
  },
  title: {
    marginBottom: 15,
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 22,
    color: '#0F0F0F'
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 22,
    color: '#363636'
  },
  accordionContainer: {
    paddingVertical: 5,
  },
  accordionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    width: '95%',
    marginHorizontal: 5,
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
  },
  accordionPar: {
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
  }
});

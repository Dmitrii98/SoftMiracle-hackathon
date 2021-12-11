import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'flex-start',
      height: 'auto',
      borderColor: '#C4C4C4',
      marginHorizontal: 15,
    },
    carousel: {
      width: '100%',
      height: '100%',
      flexGrow: 0,
      marginBottom: 20,
    },
    item: {
      backgroundColor: 'white',
      height: '98%',
      width: '90%',
      borderRadius: '4px',
      borderColor: '#C4C4C4',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
      marginRight: 12,
    },
    image: {
      width: 156,
      height: 118,
      aspectRatio: 1,
      backgroundColor: '#EBEBEB',
      borderRadius: 4,
    },
    lowerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
    },
    lowerLeft: {
      width: '50%',
    },
    titleText: {
      position: 'absolute',
      bottom:'5px',
      marginLeft: '5%',
      fontSize: 14,
      lineHeight: '22px',
      fontFamily: 'Roboto',
      fontWeight: 300,
      color: '#000000',
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
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000'
    },
    logo: {
      width: 40,
      aspectRatio: 1,
      borderRadius: 20,
      marginRight: 10,
    },
    name: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#1C2127',
    },
    imageContainer: {
      position: 'relative',
    },
  });
  
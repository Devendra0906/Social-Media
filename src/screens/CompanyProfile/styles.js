import { StyleSheet } from 'react-native';
import Color from '../../Helper/Color';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  companyImage: {
    width: '100%',
    aspectRatio: 2.5,
    backgroundColor: '#bbb',
    marginBottom: 20
  },
  floatButtons: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY
  },
  detailContainer: {
    marginHorizontal: 15,
    marginTop: 5
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  jobTitleText: {
    fontSize: 13,
    marginTop: 3
  },
  descriptionText: {
    fontSize: 13,
    marginTop: 10
  },
  mapViewStyle: {
    height: 150,
    marginHorizontal: 0
  },
  viewButtonTitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold"
  },
  cellContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    marginTop: 10
  },
  locationIcon: {
    color: "rgba(28, 117, 245, 1)",
    fontSize: 17,
    marginRight: 3
  },
  addressContainer: {
    flexDirection: 'row',
    marginVertical: 3
  }
})
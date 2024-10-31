import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  centercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  fab: {
    position: 'absolute',
    backgroundColor:'blue',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fab2: {
    position:'absolute',
    backgroundColor:'orange',
    margin: 16,
    right: 320,
    bottom: 0,
  },
  fab3: {
    position:'absolute',
    backgroundColor:'green',
    margin: 16,
    right: 150,
    bottom: 0,
  },
});

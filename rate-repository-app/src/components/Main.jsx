

import Constants from "expo-constants"
import { StyleSheet, View } from "react-native"
import RepositoryList from "./RepositoryList"
import Text from "./Text"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  }
})

export default function Main() {
  return (
    <View style={styles.container} >
      <Text color="primary" fontSize="subheading">Text</Text>
      <Text fontWeight="bold" color="primary" fontSize="subheading">Text</Text>
      {/* <RepositoryList /> */}
      {/* <Text>Rate Repository Applicationn</Text> */}
    </View>
  )
}
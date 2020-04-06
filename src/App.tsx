import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Panel from './components/Panel'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function App() {
  return (
    <View style={styles.container}>
      <Text>foo</Text>
      <Panel />
    </View>
  )
}

export default App

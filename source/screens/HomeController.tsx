import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../components'

const HomeController = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        text='hii'
        textSty={{ color: 'white' }}
        cSty={{ width: "100%", backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10 }}
        mSty={{ flex: 1, padding: 20 }}
        onP={() => { }}
      />
    </SafeAreaView>
  )
}

export default HomeController

const styles = StyleSheet.create({})
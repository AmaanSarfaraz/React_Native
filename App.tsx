import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import Whatsapp from './components/Whatsapp'
import PasswordGenerator from './components/PasswordGenerator'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Whatsapp/>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
        <PasswordGenerator/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
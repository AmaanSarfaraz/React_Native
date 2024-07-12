import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Scanner from 'react-native-vector-icons/MaterialIcons';
import Camera from 'react-native-vector-icons/Feather';
import DotsVertical from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import for double tick icon

const Whatsapp = () => {
  const people = [
    {
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      date: '2024-07-10',
      lastMessage: 'Hey, how are you?',
      tickColor: 'gray',
    },
    {
      name: 'Bob Smith',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: '2024-07-09',
      lastMessage: 'Are we still meeting tomorrow?',
      tickColor: 'blue',
    },
    {
      name: 'Cathy Brown',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      date: '2024-07-08',
      lastMessage: 'I loved the movie!',
      tickColor: 'blue',
    },
    {
      name: 'David Wilson',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      date: '2024-07-07',
      lastMessage: 'See you at the gym.',
      tickColor: 'gray',
    },
    {
      name: 'Eva Davis',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      date: '2024-07-06',
      lastMessage: 'Can you send me the files?',
      tickColor: 'blue',
    },
    {
      name: 'Frank Miller',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      date: '2024-07-05',
      lastMessage: 'Happy birthday!',
      tickColor: 'gray',
    },
    {
      name: 'Grace Lee',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      date: '2024-07-04',
      lastMessage: 'Let’s catch up soon.',
      tickColor: 'blue',
    },
    {
      name: 'Henry Clark',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      date: '2024-07-03',
      lastMessage: 'Goodnight!',
      tickColor: 'gray',
    },
    {
      name: 'Ivy Harris',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      date: '2024-07-02',
      lastMessage: 'Sure, no problem.',
      tickColor: 'blue',
    },
    {
      name: 'Jack White',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      date: '2024-07-01',
      lastMessage: 'I’ll be there in 5 minutes.',
      tickColor: 'gray',
    },
  ];

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.top}>
        <Text style={styles.logo}>WhatsApp</Text>
        <View style={styles.sideIcons}>
          <Scanner name='qr-code-scanner' size={30} color={'#101519'} style={styles.icon} />
          <Camera name='camera' size={30} color={'#101519'} style={styles.icon} />
          <DotsVertical name='dots-vertical' size={30} color={'#101519'} style={styles.icon} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="search" size={30} color="#525355" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#525355"
        />
      </View>
      <View style={styles.middle}>
        <TouchableOpacity>
          <Text style={styles.middleIcon}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.middleIcon}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.middleIcon}>Groups</Text>
        </TouchableOpacity>
      </View>
      <View>
        {people.map(({ name, image, date, lastMessage, tickColor }) => (
          <View key={date} style={styles.chat}>
            <Image source={{ uri: image }} style={styles.peopleImage} />
            <View style={styles.chatContent}>
              <View style={styles.innerChat}>
                <Text style={styles.peopleName}>{name}</Text>
                <Text style={styles.peopleDate}>{date}</Text>
              </View>
              <View style={styles.messageContainer}>
                <MaterialCommunityIcons name="check-all" size={16} color={tickColor} style={styles.tickIcon} />
                <Text style={styles.peopleLastMessage}>{lastMessage}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20a761',
    padding: 20,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sideIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f5f3',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#f6f5f3',
    margin: 10,
    paddingHorizontal: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 20, // Adjust the font size for the placeholder text
  },
  middle: {
    flexDirection: 'row',
    padding: 10,
  },
  middleIcon: {
    backgroundColor: '#f6f5f3',
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    color: '#525355',
    fontSize: 16, // Adjust the font size for the text in the middle icons
  },
  chat: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  peopleImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: '#f6f5f3',
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  innerChat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickIcon: {
    marginRight: 5,
  },
  peopleName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  peopleDate: {
    fontSize: 14,
    color: 'gray',
  },
  peopleLastMessage: {
    fontSize: 14,
    color: 'gray',
  },
});

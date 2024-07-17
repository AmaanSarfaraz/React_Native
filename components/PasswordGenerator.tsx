import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === '') {
      Alert.alert('Error', 'Please select at least one character type.');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    Clipboard.setString(password);
    Alert.alert('Copied to Clipboard', 'The generated password has been copied to your clipboard.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Generator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Length:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length.toString()}
          onChangeText={(text) => setLength(parseInt(text, 10))}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Include:</Text>
        <View style={styles.checkboxRow}>
          <Text style={styles.checkboxLabel}>Uppercase</Text>
          <Switch
            value={includeUppercase}
            onValueChange={(value) => setIncludeUppercase(value)}
          />
        </View>
        <View style={styles.checkboxRow}>
          <Text style={styles.checkboxLabel}>Lowercase</Text>
          <Switch
            value={includeLowercase}
            onValueChange={(value) => setIncludeLowercase(value)}
          />
        </View>
        <View style={styles.checkboxRow}>
          <Text style={styles.checkboxLabel}>Numbers</Text>
          <Switch
            value={includeNumbers}
            onValueChange={(value) => setIncludeNumbers(value)}
          />
        </View>
        <View style={styles.checkboxRow}>
          <Text style={styles.checkboxLabel}>Symbols</Text>
          <Switch
            value={includeSymbols}
            onValueChange={(value) => setIncludeSymbols(value)}
          />
        </View>
      </View>

      <View style={styles.passwordContainer}>
        <Text style={styles.label}>Generated Password:</Text>
        <View style={styles.passwordRow}>
          <Text style={styles.password}>{password}</Text>
          {password !== '' && (
            <Text onPress={copyToClipboard} style={styles.copyText}> Copy</Text>
          )}
        </View>
      </View>

      <Button title="Generate Password" onPress={generatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 50,
  },
  checkboxContainer: {
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    marginRight: 100,
  },
  passwordContainer: {
    marginBottom: 20,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  password: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  copyText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 10,
  },
});

export default PasswordGenerator;

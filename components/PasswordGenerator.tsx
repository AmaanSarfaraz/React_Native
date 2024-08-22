import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
   .integer()
   .min(8, 'Should must be at least 8 characters long.')
   .max(16, 'Should must be at most 16 characters long.')
   .required('Length is required.')
})
const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    if (includeUppercase) {
      characterList += upperCaseChars
    }
    if (includeLowercase) {
      characterList += LowerCaseChars
    }
    if (includeNumbers) {
      characterList += numberChars
    }
    if (includeSymbols) {
      characterList += symbolChars
    }

    const passwordResut = createPassword(characterList, passwordLength)
    setPassword(passwordResut)
    setIsPasswordGenerated(true);
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result;
  };
  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setIncludeUppercase(true);
    setIncludeLowercase(false);
    setIncludeNumbers(false);
    setIncludeSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={ values => {
              console.log(values);
              generatePassword(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                    <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                    >

                    </TextInput>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UPPERCASE</Text>
                  <BouncyCheckbox
                  useBuiltInState = {false}
                  isChecked={includeUppercase}
                  onPress={() => setIncludeUppercase(!includeUppercase)}
                  fillColor='#FED85D'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckbox
                  useBuiltInState = {false}
                  isChecked={includeLowercase}
                  onPress={() => setIncludeLowercase(!includeLowercase)}
                  fillColor='#29AB87'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                  useBuiltInState = {false}
                  isChecked={includeNumbers}
                  onPress={() => setIncludeNumbers(!includeNumbers)}
                  fillColor='#C9A0DC'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                  useBuiltInState = {false}
                  isChecked={includeSymbols}
                  onPress={() => setIncludeSymbols(!includeSymbols)}
                  fillColor='#FC80A5'
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                  disabled={!isValid}
                  style={[styles.primaryBtn, { opacity: isValid ? 1 : 0.5 }]}
                  onPress={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  ><Text style={styles.primaryBtnTxt}>Generate Password</Text></TouchableOpacity>
                  <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={() => {
                    handleReset();
                    resetPasswordState();
                  }}
                  ><Text style={styles.secondaryBtnTxt}>Reset</Text></TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to Copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});

export default PasswordGenerator;

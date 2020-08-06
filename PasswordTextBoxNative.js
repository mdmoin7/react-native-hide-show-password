import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Password = props => {
  const [value, onChangeText] = React.useState(props.value);
  const [visible, setVisibility] = React.useState(false);
  const [errorStatus, displayErrors] = React.useState(false);

  const icon = !visible ? 'eye-slash' : 'eye';
  const height = (props.height);

  return (
    <View
      style={{
        display: 'flex',
        marginVertical: (5),
      }}>
      <View style={styles.container}>
        <Icon
          name={'key'}
          color={'#9e9e9e'}
          style={[styles.icons, {height: height, width: height}]}
        />
        <TextInput
          style={{
            height: height,
            flex: 1,
            alignSelf: 'stretch',
            paddingHorizontal: (10),
          }}
          onChangeText={text => {
            onChangeText(text);
            props.onChange(text);
          }}
          onBlur={() => {
            displayErrors(true);
          }}
          value={value}
          placeholder={props.label}
          secureTextEntry={!visible}
        />
        <Icon
          name={icon}
          color={'#9e9e9e'}
          onPress={() => setVisibility(!visible)}
          style={[styles.icons, {height: height, width: height}]}
        />
      </View>
      <ShowErrors
        value={value}
        display={errorStatus}
        validations={props.validators}
      />
    </View>
  );
};
Password.defaultProps = {
  label: '',
  height: (20),
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderColor: '#e3e3e3',
    borderWidth: 1,
    borderRadius: 4,
  },
  icons: {
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

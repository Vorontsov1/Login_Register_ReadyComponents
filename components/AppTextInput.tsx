import React, {useState} from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
    const [focused, setFocused] = useState<boolean>(false);

    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          {
            width: "100%",
            height: 60,
            backgroundColor: "#FFB84C",
            borderRadius: 10,
            padding: 20,
            marginVertical: 20,
          },
          focused && { borderWidth: 1, borderColor: '#A459D1' },
        ]}
        {...otherProps}
      />
    );
}

export default AppTextInput;

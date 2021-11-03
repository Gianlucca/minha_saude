import React from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Text, TextInput, IconButton} from 'react-native-paper';

export default function LoadingComponent() {
  return (
    <View>
      <Text>carregando... </Text>
    </View>
  );
}

import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 42px;
  padding: 0 8px;

  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #212121;
  font-size: 16px;
  font-family: 'OpenSans-Light';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 5px;
`;

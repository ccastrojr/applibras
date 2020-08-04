import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Video } from './index';

export const Container = styled.View`
  width: 100%;
  padding: 15px 30px;
  flex-direction: column;
  flex: 1;
`;

export const VideoList = styled(FlatList as new () => FlatList<Video>)`
  margin: 10px 0 15px;
`;

export const VideoContainer = styled.View`
  margin-bottom: 5px;
  padding: 5px;
`;

export const VideoTitle = styled.Text`
  margin: 5px 0 0;
  font-family: 'OpenSans-SemiBold';
  font-size: 18px;
  color: #212121;
`;

export const TagsWrapper = styled.View`
  margin-top: 7px;
  flex-direction: row;
`;

export const Tag = styled.Text`
  margin-right: 7px;

  font-family: 'OpenSans-SemiBold';
  font-size: 10px;
  color: #fafafa;
  text-transform: uppercase;

  padding: 5px;
  background: #424242;
  border-radius: 4px;
`;

import React from 'react';
import { Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useRoute } from '@react-navigation/native';

import { 
  Title,
  SignWriting,
  Description,
  SignInfo,
} from './styles';

import { 
  Container,
  VideoTitle,
  TagsWrapper,
  Tag 
} from './../Dashboard/styles'

import Button from './../../components/Button';

interface Params {
  title: string;
  videoURL: string;
  imageURL: string,
  description: string;
  tags: string[];
}

const Sinal: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;

  return (
    <Container>
      <SignInfo>
        <YoutubePlayer
          height={(Dimensions.get('window').width - 60) * 0.5625}
          width={Dimensions.get('window').width - 60}
          videoId={routeParams.videoURL}
          initialPlayerParams={{}}
        />
        <VideoTitle>{routeParams.title}</VideoTitle>
        <TagsWrapper>
          {routeParams.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsWrapper>

        <Title>Escrita do Sinal</Title>
        <SignWriting
          source={{uri: routeParams.imageURL}}
        />
        
        <Title>Descrição</Title>
        <Description>{routeParams.description}</Description>
      </SignInfo>

      <Button>Sugerir Correção</Button>
    </Container>
  );
};

export default Sinal;

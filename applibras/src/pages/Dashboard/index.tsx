import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  VideoList,
  VideoContainer,
  VideoPlayer,
  IconPlay,
  VideoTitle,
  TagsWrapper,
  Tag,
} from './styles';

export interface Video {
  id: string;
  title: string;
  tags: string[];
}

const data = [
  {
    id: '1',
    title: 'Laço de Repetição',
    tags: ['estrutura de repetição', 'básico'],
  },
  { id: '2', title: 'If e Else', tags: ['estrutura de decisão', 'básico'] },
  { id: '3', title: 'Operações Básicas', tags: ['matemática', 'básico'] },
];

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Input name="busca" icon="mail" placeholder="pesquisar sinal" />

      <VideoList
        data={data}
        keyExtractor={videoData => videoData.id}
        renderItem={({ item }) => (
          <VideoContainer>
            <VideoPlayer>
              <IconPlay name="play" size={60} color="#424242" />
            </VideoPlayer>

            <VideoTitle>{item.title}</VideoTitle>

            <TagsWrapper>
              {item.tags.map(tag => (
                <Tag>{tag}</Tag>
              ))}
            </TagsWrapper>
          </VideoContainer>
        )}
      />

      <Button>Sugerir Inclusão</Button>
    </Container>
  );
};

export default Dashboard;

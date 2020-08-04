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
  videoURL: string;
  imageURL: string;
  description: string;
  tags: string[];
}

const data = [
  {
    id: '1',
    title: 'Algoritmo',
    videoURL: '6tOVdzbbWOM',
    imageURL: 'https://i.imgur.com/eA2Mmdq.png',
    description: 'Qualquer procedimento computacional bem definido que toma algum valor ou conjunto de valores como entrada e produz algum valor ou conjunto de valores como saída. Sequência de passos computacionais que transformam entrada na saída',
    tags: ['algoritmo', 'básico'],
  },
  {
    id: '2',
    title: 'Bloco',
    videoURL: 'Znn9wh_y7DI',
    imageURL: 'https://i.imgur.com/9kGUkZB.png',
    description: 'Conjunto de ações com uma função definida',
    tags: ['bloco', 'sintaxe', 'básico'],

  },
  {
    id: '3',
    title: 'Executar',
    videoURL: 'IHm6wr7FD5Q',
    imageURL: 'https://i.imgur.com/FtcqKTK.png',
    description: 'A execução de um programa compilado se faz invocando-o como se fosse um processo do sistema',
    tags: ['executar', 'execução', 'básico'],
  },
  {
    id: '4',
    title: 'Função',
    videoURL: '1Ja42BjMdzY',
    imageURL: 'https://i.imgur.com/V5Ab68T.png',
    description: 'Conjunto de comandos agrupados em um bloco, que recebe um nome particular e executa uma tarefa específica',
    tags: ['função', 'sintaxe','básico'],

  },
];

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Input name="busca" icon="mail" placeholder="pesquisar sinal" />

      <VideoList
        data={data}
        keyExtractor={(videoData : Video) => videoData.id}
        renderItem={({ item } : { item : Video}) => (
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

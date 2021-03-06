import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  VideoList,
  VideoContainer,
  SignImage,
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
  const navigation = useNavigation();
  
  //const [data, setData] = useState<Video[]>();

  function handleNavigateToSinal(item: Video){
    navigation.navigate('Sinal', item);
  }

  async function handleComposeMail(){

    let url = 'mailto:lidialopes@acad.ifma.edu.br?subject=Sugestão de Inclusão de Sinal'

    if(await Linking.canOpenURL(url)){
      Linking.openURL(url);
    }    
  }

/*  useEffect(() => {
    api.get('').then(response => (
      setData(response.data)
    ))
  }, []);

  if(!data){
    return null;
  }
*/

  return (
    <Container>
      <Input name="busca" icon="search" placeholder="Pesquisar sinal" />

      <VideoList
        data={data}
        keyExtractor={(videoData : Video) => videoData.id}
        renderItem={({ item } : { item : Video}) => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => handleNavigateToSinal(item)}>
            <VideoContainer>
              <SignImage source={{uri: `https://img.youtube.com/vi/${item.videoURL}/hqdefault.jpg`}} />
              <VideoTitle>{item.title}</VideoTitle>
              <TagsWrapper>
                {item.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
            </VideoContainer>
          </TouchableOpacity>
        )}
      />

      <Button onPress={handleComposeMail}>Sugerir Inclusão</Button>
    </Container>
  );
};

export default Dashboard;
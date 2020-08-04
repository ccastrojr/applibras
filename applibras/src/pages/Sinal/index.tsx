import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Container } from './../Dashboard/styles';

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

  return <Container />;
};

export default Sinal;

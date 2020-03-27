import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import Routes from './src/routes';

//  <div> <h1> <span> <h1>
// não tem as mesmas tags que o HTML, vamos utilizar divs para praticamente tudo
export default function App() {
  return <Routes />;
}

// a estilização é feita a partir de um objeto contendo todos os estilos.
// todos os elementos tem display: flex por padrão
// as propriedades do CSS são escritas no padrão camelCase
// os valores de cada propriedade devem ser envoltos em aspas, exceto números
// não existe herança de estilos
// cada elemento tem um estilo próprio

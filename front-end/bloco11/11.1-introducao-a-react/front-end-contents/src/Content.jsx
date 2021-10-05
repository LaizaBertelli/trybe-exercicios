import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className='contents'>
        {
          conteudos.map(singleContent => {
            const listParent = <ul>
              <li key={singleContent.conteudo}>O conteúdo é {singleContent.conteudo}</li>
              <li key={singleContent.status}>Status: {singleContent.status}</li>
              <li key={singleContent.bloco}>Bloco: {singleContent.bloco}</li>
            </ul>

            return listParent;
          })
        }
      </div>
    );
  }
}

export default Content;

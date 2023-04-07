import React, { useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import styled from 'styled-components'
import Preview from './Preview';
import CardEditor from './CardEditor';

const MakerDiv=styled.div`
    width:100%;
    height:100%;
    max-width:80rem;
    display:flex;
    flex-direction:column;
    background-color:white;
    
`;
const ContainerDiv=styled.div`
    display:flex;
    flex:1;  /* 가득채운다라는 뜻 */
    min-height:0;
    
  }
`
const CardManager = () => {
    const [cards, setCards] = useState({
        '1':{
          id: '1',
          name: '이성계',
          company: 'Samsung',
          theme: 'dark',
          title: 'Software Engineer',
          email: 'lee@gmail.com',
          message: 'go for it',
          fileName: 'lee',
          fileURL: null,
        },
      '2':{
          id: '2',
          name: '김유신',
          company: 'Cupang',
          theme: 'light',
          title: 'Software Engineer',
          email: 'kim@gmail.com',
          message: 'I can do it',
          fileName: 'kim',
          fileURL: 'kim.png',
      },
      '3':{
          id: '3',
          name: '유재석',
          company: 'MBC',
          theme: 'colorful',
          title: 'Software Engineer',
          email: 'you@gmail.com',
          message: 'we are the world',
          fileName: 'you',
          fileURL: null,
      }
    });

  return (
    <MakerDiv>
        <Header/>
        <ContainerDiv>
            <CardEditor cards={cards}/>
                <Preview cards={cards}/>
        </ContainerDiv>
        <Footer/>
    </MakerDiv>
   
  )
}

export default CardManager

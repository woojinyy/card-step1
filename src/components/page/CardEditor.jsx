import React from 'react'
import CardEditorForm from './CardEditorForm'
import CardAddForm from './CardAddForm'
import styled from 'styled-components'

const EditorDiv=styled.div`
    flex-basis:50%;
    border-right:1px solid #2C74B3;/* editor와 preview사이구분선넣기 */
    paddig:0.5em 2em;
    overflow-y:auto;
`;
const TitleH1=styled.h1`
    width:100%;
    text-align:center;
    margin-bottom:1em;
    color:#0A2647;

`;
const CardEditor = ({cards}) => {//n번만큼 반복해야해
  return (
    <EditorDiv>
      <TitleH1>CardEditor</TitleH1>
        {Object.keys(cards).map(key=>(
            <CardEditorForm/>
        ))
        }
        <CardAddForm/>
    </EditorDiv>
  )
}

export default CardEditor

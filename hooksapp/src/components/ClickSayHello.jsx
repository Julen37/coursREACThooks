import { useState, useEffect } from 'react'
import useUpdateDocTitle from '../hooks/useUpdateDocTitle';


function ClickSayHello() {

    const [text, setText] = useState('');

    // useEffect(() => {
    //     // console.dir(document); // la direction, voir tout ce que contient en console sur lequel on va agir
    //     // document.title = text;
    //     document.title = `Titre : ${text}`;

    // }, [text]);

    useUpdateDocTitle(text);
    
  return (
    <button onClick={() => setText("Hello World")}>Cliquez</button>
  )
}

export default ClickSayHello

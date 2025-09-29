import { useState, useEffect } from 'react'
import useUpdateDocTitle from '../hooks/useUpdateDocTitle';


function ClickSayHello() {

    const [text, setText] = useState('');
    const [isTrue,setIsTrue] = useState(true);

    // useEffect(() => {
    //     // console.dir(document); // la direction, voir tout ce que contient en console sur lequel on va agir
    //     // document.title = text;
    //     document.title = `Titre : ${text}`;

    // }, [text]);

    useUpdateDocTitle(text);

    useEffect(() => { // pour que ca se mette a jour a chaque fois qu'on clique meme apres avoir ecrit dans le search.jsx (durée de vie d'un composant)
      isTrue ? setText("Bonjour") : setText("Bonsoir");
    }, [isTrue]);
    
  return (
    // <button onClick={() => setText("Hello World")}>Cliquez</button>
    <button onClick={() => setIsTrue(!isTrue)}>Cliquez</button> // on a modifié le set pcq c'est lié avec le mycontacts/search.jsx
  )
}

export default ClickSayHello

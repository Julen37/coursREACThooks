import React, { useEffect, useState } from 'react'
import Search from './Search'
import useUpdateDocTitle from '../hooks/useUpdateDocTitle';
import TableUsers from './TableUsers';

const MyContacts = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => { // api pour faire comme si on avait une bdd
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json);
        setIsLoading(false); // mettre sur false pour quand c'est fini de load
      })
      .catch(error => console.log(error.message))
  }, [])

  // console.log(search);
  console.log(users);


  const handleChange = e => {
      setSearch(e.target.value)
  };

  useUpdateDocTitle(search); // utilisation du hook personnalisé

  const msgDisplay = (msg, color) => { // fonction pour afficher le message du loading 
      return (
          <p style={{textAlign: 'center', color: color}}>{msg}</p>
      )
  }

  return (
    <div>
      {
        isLoading ? msgDisplay('Veuillez patienter', 'red') : ( // affiche ca quand ca load sinon le Search
          <Search 
            searchStr={search} 
            searchHandler={handleChange}
        />
        )
      }
      <TableUsers dataArray={users}/>
    </div>
  )
}

export default MyContacts

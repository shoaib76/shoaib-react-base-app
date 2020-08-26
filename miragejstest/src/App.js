import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBooks(data);
      })

  }, [])
  if (!books.length)
    return <h5>Loading...!</h5>

  return (
    <div className="App">
      Available Books
      <table>
        {books.map((bookObj, ind) => {
          return (<tr key={ind}>
            <td>{bookObj.title}</td>
            <td>{bookObj.auth}</td>
          </tr>)
        })}
      </table>

    </div>
  );
}

export default App;

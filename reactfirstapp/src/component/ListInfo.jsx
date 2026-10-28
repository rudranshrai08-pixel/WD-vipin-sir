import React from 'react'

  function ListInfo () {
    let name = "Rudransh rai";
    let listofName ={
      name : "Rudransh rai",
      id : 1,
      class : "MCA"
    }
    let lang = [
      "JavaScript","React JS", "Node JS", "Python", "Java", "C++", "C#"
    ]

    
  return (
    <>
      <h3>List of Languages</h3>
      
        {lang.map((value, index) => (
          <li key={index}>{index}. {value}</li>
        ))}

    </>
  )
}

export default App;

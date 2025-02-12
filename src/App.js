import React from 'react'

const App = () => {
 async function getData(){
    const apiCheck = await fetch("https://picsum.photos/v2/list")
    const data = await apiCheck.json();
    console.log(data.id);
       
  }
  return (
    <>
      <button onClick={getData}>Show Data</button>
    </>
  )
}

export default App
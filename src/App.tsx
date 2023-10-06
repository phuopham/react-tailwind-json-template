import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState({data:""})
  useEffect(() => {
    fetch('data.json').then(response => {
      response.json().then(data => {
        setData(data)
        console.log(data)
      })
    })
  }, [])
  return (
    <>
      <p className='text-red-600 text-3xl'>Hello</p>
      {data ? <p>{data.data}</p> : null}
    </>
  )
}

export default App

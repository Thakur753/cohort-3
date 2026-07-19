import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  let printData = <h3 className="text-lg font-bold text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">loading ....</h3>

  if (userData.length > 0) {
    
    printData = userData.map(function (elem, id) {
      return (
        <div key={id} className="text-center">
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className='bg-black text-yellow-50 min-h-screen w-full p-4'>
      <div className="flex flex-wrap gap-6 justify-center">
        {printData}
      </div>
      
      <div className="flex justify-center items-center p-4 gap-10 mt-10">
        <button 
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-90 disabled:opacity-50"
          disabled={index === 1} 
          onClick={() => {
            if (index > 1) { setIndex(index - 1)
              setUserData([])
             }
          }}
        >
          Previous
        </button>
        <span className="font-bold text-amber-400">Page {index}</span>
        <button 
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-90"
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
            
            <div className="h-48 w-48 bg-amber-200 rounded-3xl overflow-hidden shadow-lg">
              
              <img className="h-full w-full object-cover" src={props.elem.download_url} alt="" />
            </div>
            
            <h1 className="text-sm font-semibold mt-2 text-yellow-100">
              {props.elem.author.slice(0, 12)}
            </h1>
          </a>
    </div>
  )
}

export default Card

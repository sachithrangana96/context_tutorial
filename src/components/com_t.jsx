import React from 'react'

const com_t = ({username,setUsername}) => {
  return (
    <div>
      <h1>com 3 - {username}</h1>
      <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
    </div>
  )
}

export default com_t

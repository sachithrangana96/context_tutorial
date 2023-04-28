import React from 'react'
import Com_t from './com_t'

const com_s = ({username,setUsername}) => {
  return (
    <div>
      <h1>Com 2 - {username}</h1>
      <Com_t username={username} setUsername={setUsername} />
    </div>
  )
}

export default com_s

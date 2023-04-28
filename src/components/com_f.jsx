import React from 'react'
import Com_s from './com_s'

const com_f = ({username,setUsername}) => {
  return (
    <div>
      <h1>Com 1 - {username}</h1>
      <Com_s username={username} setUsername={setUsername} />
    </div>
  )
}

export default com_f

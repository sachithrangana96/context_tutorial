import React,{useContext} from 'react'
import {userAuth} from '../App'

const Context_three = () => {
  const {lastname,setLastname} = useContext(userAuth)
  return (
    <div>
      <h1>Context Three</h1>
      <input type='text' placeholder='context api sample' onChange={(e)=>setLastname(e.target.value)} />
    </div>
  )
}

export default Context_three

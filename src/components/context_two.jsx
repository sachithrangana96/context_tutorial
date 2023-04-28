import React,{useContext} from 'react'
import { userAuth } from '../App'
import Context_three from './context_three'

const Context_two = () => {
  const {lastname} = useContext(userAuth)
  return (
    <div>
      <h1>Context Three - {lastname} </h1>
      <Context_three />
    </div>
  )
}

export default Context_two

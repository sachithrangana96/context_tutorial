import React,{useContext} from 'react'
import { userAuth } from '../App'
import Context_two from './context_two'

const Context_One = () => {
  const {lastname} = useContext(userAuth)
  return (
    <div>
      <h1>Context one - {lastname}</h1>
      <Context_two />
    </div>
  )
}

export default Context_One

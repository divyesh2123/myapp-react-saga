import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from './action/counterAction';

export default function Counter() {

   const co= useSelector(y=>y.counter);

   const dis = useDispatch();

   const inc = ()=>{

    dis({type: 'Asyc_INC'})
   }

   const dec = ()=>{

    dis({type: 'Asyc_Dec'})
   }
  return (
    <div>{co}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}

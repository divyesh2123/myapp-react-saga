import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { UseRequest, UserError, UserSuc } from './action/userAction';
import { getUser } from './asyncaction/userAsyncAction';

export default function User() {
    
    const s = useSelector(y=>y.user);

    const d= useDispatch();

    console.log(s);

    useEffect(()=>{

        d(getUser())

    },[])

  return (
    <div>User</div>
  )
}

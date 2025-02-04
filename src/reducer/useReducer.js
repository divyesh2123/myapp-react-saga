const initialState = {
    isLoading: false,
    data: [],
    error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'UserRequest':
    return { ...state, isLoading:true }
    case 'UserSuc':
        return { ...state, isLoading:false, data:payload }
        case 'UserRequest':
            return { ...state, isLoading:false,error:payload }

  default:
    return state
  }
}

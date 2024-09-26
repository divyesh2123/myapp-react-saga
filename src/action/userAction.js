export const UseRequest = () => ({
  type: 'UserRequest'
});

export const UserSuc = (a) => ({
  type: 'UserSuc',
  payload:a
})

export const UserError = (payload) => ({
  type: 'UserError',
  payload
})



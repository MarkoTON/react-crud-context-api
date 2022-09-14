export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    case 'EDIT_USER':
      const updateUser = action.payload;
      console.log(updateUser);

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          console.log(updateUser)
          // Kada naidjes na ovog usera sa ovim ID-em, nemoj njega da vratis pri mapiranju nego vrati updatedUser-a
          return updateUser;
        }
        console.log(user)
        return user;
      })
      console.log(updateUsers)
      return {
        ...state,
        users: updateUsers
      }

    default:
      return state;
  }
}
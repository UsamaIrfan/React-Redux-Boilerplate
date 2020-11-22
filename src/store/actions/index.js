const set_data = () => {
   return (dispatch) => {
      dispatch({
         type: "SET_DATA",
         payload: { name: "Hira Mushtaq", email: "someone@love.com"}
      })
   }
}

export {
   set_data
}
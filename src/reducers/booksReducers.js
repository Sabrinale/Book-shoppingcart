"use strict"
//BOOKS REDUCERS
export function booksReducers(state={
  books:[]
}, action){
  switch(action.type){
    case "GET_BOOKS":
    return {...state, books:[...action.payload]}
    break;
    case "POST_BOOK":
    return {...state, books:[...state.books, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}
    break;
    case "POST_BOOK_REJECTED":
    return {...state, msg:'Please, try again', style:'danger', validation:'error'}
    break;
    case "RESET_BUTTON":
    return {...state, msg:null, style:'primary', validation:null}
    break;
    case "DELETE_BOOK":
    const currentBookToDelete = [...state.books]
    const indexToDelete = currentBookToDelete.findIndex((book) =>
        book._id == action.payload
    )
    return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;
    case "UPDATE_BOOK":
    const currentBookToUpdate = [...state.books]
    const indexToUpdate = currentBookToUpdate.findIndex((book) => 
       book._id === action.payload._id
    )
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state
}

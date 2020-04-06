import { combineReducers } from 'redux'
import BookReducers from './books'
import CurrentBook from './book'

const rootReducer = combineReducers({
    books: BookReducers,
    book: CurrentBook
})

export default rootReducer
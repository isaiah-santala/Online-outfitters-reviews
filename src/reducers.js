import { combineReducers } from 'redux'

const initialState = {
    itemName: '',
    itemId: '',
    reviews: []
}

const item = (state = initialState, action) => {
  switch(action.type) {
    case 'SET': return action.payload
    default: return state
  }
}

export default combineReducers({
  item
})
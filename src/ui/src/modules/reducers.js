import { combineReducers } from 'redux'

import ui from 'modules/ui/reducer'
import products from 'modules/products/reducer'
import cart from 'modules/cart/reducer'

export default combineReducers({
  ui,
  products,
  cart,
})

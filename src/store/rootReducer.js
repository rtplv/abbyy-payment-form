import { combineReducers } from 'redux';

import paymentRepeatFormReducer from 'panels/payment/paymentRepeatFormReducer';

export default combineReducers({
  paymentRepeatForm: paymentRepeatFormReducer
});

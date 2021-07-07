import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "./ducks/auth.duck";
import * as user from "./ducks/user.duck";
import * as job from "./ducks/job.duck";
import * as bid from "./ducks/bid.duck";
import * as history from "./ducks/history.duck";
import * as activity from "./ducks/activity.duck";
import * as shortcut from "./ducks/shortcut.duck";
import * as pageLink from "./ducks/pageLink.duck";
import * as message from "./ducks/message.duck";
import * as currentState from "./ducks/currentState.duck";
import * as ledger from "./ducks/ledger.duck";
import * as category from "./ducks/category.duck";
import { metronic } from "../../_metronic";

const appReducer = combineReducers({
  auth: auth.authReducer,
  i18n: metronic.i18n.reducer,
  builder: metronic.builder.reducer,
  user: user.userReducer,
  job: job.jobReducer,
  bid: bid.bidReducer,
  message:message.messageReducer,
  history: history.historyReducer,
  activity: activity.activityReducer,
  shortcut: shortcut.shortcutReducer,
  pageLink: pageLink.pageLinkReducer,
  currentState: currentState.currentStateReducer,
  ledger: ledger.ledgerReducer,
  category:category.categoryReducer
});

export const rootReducer = (state, action) => {
  // if (action.type === 'LOGOUT') {
  //   state = undefined
  // }  
  return appReducer(state, action)
}

export function* rootSaga() {
  yield all([auth.saga(),category.saga(),bid.saga(), message.saga(),user.saga(),job.saga(),history.saga(), activity.saga(), shortcut.saga(), pageLink.saga(), currentState.saga(), ledger.saga()]);
}

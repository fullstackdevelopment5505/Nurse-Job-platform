import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getUserByToken } from "../../crud/auth.crud";
import * as routerHelpers from "../../router/RouterHelpers";

export const actionTypes = {
  Login: "[Login] Action",
  UserLogin: "[UserLogin] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UpdateRealUser:"[UpdateRealUser] Action",
  PassUpdate:"[PassUpdate] Action",
  UserLoaded: "[Load User] Auth API"  
};

const initialAuthState = {
  user: undefined,
  token: undefined,
  role: undefined
};

// export const reducer = persistReducer(
//     { storage, key: "demo1-auth", whitelist: ["user", "authToken"] },
//     (state = initialAuthState, action) => {
//       switch (action.type) {
//         case actionTypes.Login: {
//           const { authToken } = action.payload;

//           return { authToken, user: undefined };
//         }

//         case actionTypes.Register: {
//           const { authToken } = action.payload;

//           return { authToken, user: undefined };
//         }

//         case actionTypes.Logout: {
//           routerHelpers.forgotLastLocation();
//           return initialAuthState;
//         }

//         case actionTypes.UserLoaded: {
//           const { user } = action.payload;

//           return { ...state, user };
//         }

//         default:
//           return state;
//       }
//     }
// );
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      console.log('Login payoload')
      console.log(action.payload)
        const { user, token, role } = action.payload;
      return {user, token, role};
    }
    case actionTypes.UserLogin: {
      console.log('UserLogin payoload')
      console.log(action.payload)
        const { user, token, role } = action.payload;
      return {user, token, role};
    }
    case actionTypes.Register: {
      const { user, token, role } = action.payload;
      return {user, token, role};
    }
    case actionTypes.UpdateRealUser: {
      const user = action.payload;
      return {...state, user:user};
    }
    case actionTypes.Logout: {
      routerHelpers.forgotLastLocation();
      localStorage.removeItem("isDashboardFirstRender");
      return initialAuthState;
    }
    case actionTypes.UserLoaded: {
      const { user } = action.payload;

      return { ...state, user };
    }
    case actionTypes.PassUpdate:{
      const user = action.payload;
      return {...state, user:user};
    }
    default:
      return state;
  }
}


export const actions = {
  login: userData => ({ type: actionTypes.Login, payload: userData }),
  userlogin: userData => ({ type: actionTypes.UserLogin, payload: userData }),
  updateRealUser:userData=>({type:actionTypes.UpdateRealUser, payload:userData}),
  register: user => ({
    type: actionTypes.Register,
    payload: { user }
  }),
  passUpdate:userData=>({type:actionTypes.PassUpdate, payload:userData}),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: user => ({ type: actionTypes.UserRequested, payload: { user } }),
  fulfillUser: user => ({ type: actionTypes.UserLoaded, payload: { user } })
};

export function* saga() {
  // yield takeLatest(actionTypes.Login, function* loginSaga() {
  //   yield put(actions.requestUser());
  // });

  // yield takeLatest(actionTypes.Register, function* registerSaga() {
  //   yield put(actions.requestUser());
  // });

  // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
  //   const { data: user } = yield getUserByToken();

  //   yield put(actions.fulfillUser(user));
  // });
}

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import * as routerHelpers from "../../router/RouterHelpers";

export const actionTypes = {
  AllUsers : "[AllUsers] Action",
  AddUser : "[AddUser] Action",
  UpdateUser : "[UpdateUser] Action",
  DeleteUser : "[DeleteUser] Action",
  Logout : "[Logout] Action",
  AddNurse :'[AddNurse] Action',
  UpdateNurse :'[UpdateNurse] Action',
  DeleteNurse :'[DeleteNurse] Action',
  AllNurses :'[AllNurses] Action',
  UpdateClient :'[UpdateClient] Action',
  DeleteClient :'[DeleteClient] Action',
  AllClients :'[AllClients] Action',
  SetCurUser:'[SetCurUser] Action',
};

const initialUserState = {
  users: [],
  nurses:[],
  clients:[],
  curuser:{}
};

// export const reducer = persistReducer(
//   { storage, key: "personal-user", whitelist: ["users"] },
//   (state = initialUserState, action) => {
export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case actionTypes.AllUsers: {
        const { allUsers } = action.payload;
        return { ...state, users: allUsers };
      }
      case actionTypes.AddUser: {
        const { allUsers } = action.payload;
        return { ...state, users: allUsers };
      }
      case actionTypes.UpdateUser: {
        const { allUsers } = action.payload;
        return { ...state, users: allUsers };
      }
      case actionTypes.DeleteUser: {
        const { allUsers } = action.payload;
        return { ...state, users: allUsers };
      }
      case actionTypes.SetCurUser: {
        const curuser = action.payload;
        return { ...state, curuser: curuser };
      }
      case actionTypes.Logout: {
        routerHelpers.forgotLastLocation();
        return initialUserState;
      }


      case actionTypes.AddNurse: {
        const nurses = action.payload;
        return { ...state, nurses: nurses };
      }
      case actionTypes.DeleteNurse: {
        const nurses = action.payload;
        return { ...state, nurses: nurses };
      }
      case actionTypes.UpdateNurse: {
        const nurses = action.payload;
        return { ...state, nurses: nurses };
      }
      case actionTypes.AllNurses: {
        const nurses = action.payload;
        return { ...state, nurses: nurses };
      }


      case actionTypes.AddClient: {
        const clients = action.payload;
        return { ...state, clients: clients };
      }
      case actionTypes.DeleteClient: {
        const clients = action.payload;
        return { ...state, clients: clients };
      }
      case actionTypes.UpdateClient: {
        const clients = action.payload;
        return { ...state, clients: clients };
      }
      case actionTypes.AllClients: {
        const clients = action.payload;
        return { ...state, clients: clients };
      }
      default:
        return state;
    }
  }
// );

export const actions = {
  allUsers: allUsers => ({ type: actionTypes.AllUsers, payload: { allUsers } }),
  addUser: allUsers => ({ type: actionTypes.AddUser, payload: { allUsers } }),
  updateUser: allUsers => ({ type: actionTypes.UpdateUser, payload: { allUsers } }),
  deleteUser: allUsers => ({ type: actionTypes.DeleteUser, payload: { allUsers } }),
  setCurUser: curuser=>({type:actionTypes.SetCurUser, payload:curuser}),
  addNurse:  nurses=> ({ type: actionTypes.AddNurse, payload: nurses }),
  updateNurse: nurses => ({ type: actionTypes.UpdateNurse, payload: nurses }),
  deleteNurse: nurses => ({ type: actionTypes.DeleteNurse, payload: nurses }),
  allNurses: nurses => ({ type: actionTypes.AllNurses, payload: nurses }),

  addClient: clients => ({ type: actionTypes.AddClient, payload: clients }),
  updateClient: clients => ({ type: actionTypes.UpdateClient, payload: clients }),
  deleteClient: clients => ({ type: actionTypes.DeleteClient, payload: clients }),
  allClients: clients => ({ type: actionTypes.AllClients, payload: clients }),


  logout: () => ({ type: actionTypes.Logout }),

};

export function* saga() {
  // yield takeLatest(actionTypes.AllUsers, function* allUsersSaga() {
  //   yield put(actions.allUsers());
  // });

  // yield takeLatest(actionTypes.AddUser, function* addUserSaga() {
  //   yield put(actions.addUser());
  // });
}

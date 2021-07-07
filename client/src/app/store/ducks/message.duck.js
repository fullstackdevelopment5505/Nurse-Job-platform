export const actionTypes = {
    APPEND_MESSAGE : "APPEND_MESSAGE",
    IS_TYPING : "IS_TYPING",
    JUST_JOINED : "JUST_JOINED",
    NOT_TYPING : "NOT_TYPING",
    ADD_ROOM:'ADD_ROOM'
  };
  
  const initialMessageState = {
    messages:[],
    rooms:[],
    typist:null,
    joined:false,
  };
  
  export const messageReducer = (state = initialMessageState, action) => {
      switch (action.type) {
        case actionTypes.APPEND_MESSAGE:
            const temp = [...state.messages,action.payload];
            return {
                ...state,
                messages:temp,
            };
        case actionTypes.IS_TYPING:
            return {
                ...state,
                typist:action.payload.handle,
            };
        case actionTypes.JUST_JOINED:
            return {
                ...state,
                joined:action.payload.success,
            };
        case actionTypes.NOT_TYPING:
            return {
                ...state,
                typist:null,
            };
        case actionTypes:ADD_ROOM:
            return{
                ...state,
                rooms:action.payload.rooms
            }
        default:
            return state;
      }
  }
  
  export const actions = {
    appendMessage: (data) => ({ type: actionTypes.APPEND_MESSAGE, payload: {...data} }),
    isTyping: (data) => ({ type: actionTypes.IS_TYPING, payload: {...data} }),
    notTyping: (data) => ({ type: actionTypes.NOT_TYPING, payload: {...data} }),
    justJoined: (bool) => ({ type: actionTypes.JUST_JOINED, payload: { success:bool} }),
    addRoom:(data)=> ({ type: actionTypes.ADD_ROOM, payload: {...data} })
    // logout: () => ({ type: actionTypes.Logout }),
  };
  
  export function* saga() {
    // yield takeLatest(actionTypes.AllLedgers, function* allLedgersSaga() {
    //   yield put(actions.allLedgers());
    // });
  
    // yield takeLatest(actionTypes.AddLedger, function* addLedgerSaga() {
    //   yield put(actions.addLedger());
    // });
  }
  
import { roomActions } from "../actions/roomAction";

const initialState = {
  isUserInRoom : false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false
};

const reducer = (state = initialState, action) => {
  switch(action.type){
      case roomActions.OPEN_ROOM:
          return {
              ...state,
              isUserInRoom: action.isUserInRoom,
              isUserRoomCreator: action.isUserRoomCreator
          }
          case roomActions.SET_ROOM_DETAILS:
              return {
                  ...state,
                  roomDetails: action.roomDetails
              }
          case roomActions.SET_ACTIVE_ROOMS:
              return {
                  ...state,
                  activeRooms: action.activeRooms
              }
          case roomActions.SET_LOCAL_STREAMS:
              return {
                  ...state,
                  localStream: action.localStream
              }
      default:
          return state
  }
}

export default reducer
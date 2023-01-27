const {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  ORDER,
  FILTER,
} = require("./actions.js");
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (item) => item.id !== action.payload
        ),
        myFavorites: state.allCharacters.filter(
          (item) => item.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter(
          (item) => item.gender == action.payload
        ),
      };

    case ORDER:
      console.log(state.myFavorites);
      console.log(action.payload);
      if (action.payload == "Ascendente") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((p1, p2) =>
            p1.id > p2.id ? 1 : p1.id < p2.id ? -1 : 0
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((p1, p2) =>
            p1.id < p2.id ? 1 : p1.id > p2.id ? -1 : 0
          ),
        };
      }

    default:
      return state;
  }
};

export default rootReducer;

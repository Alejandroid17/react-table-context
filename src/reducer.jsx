import Chance from "chance";

const chance = new Chance();

const ReactTableReducer = (state, action) => {
  let newState = state;

  const actions = {
    ADD: () => {
      newState = {
        ...state,
        data: [
          ...state.data,
          {
            firstName: chance.first(),
            lastName: chance.last(),
            age: chance.age(),
          },
        ],
      };
    },
    CLEAR: () => {
      newState = {
        ...state,
        data: [],
      };
    }
  };

  actions[action.type]();
  return newState;
};

export default ReactTableReducer;

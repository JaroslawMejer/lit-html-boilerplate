import { nanoid } from "nanoid";
import { REMOVE_PERSON, FILTER_PEOPLE } from "./actions";

export const VisibilityFilters = {
  SHOW_ALL: "All",
  SHOW_ADMIN: "Admin",
  SHOW_CUSTOMER: "Customer",
};

const INITIAL_STATE = {
  peopleList: [
    {
      name: "Jaroslaw",
      age: 28,
      job: "Front End Developer",
      cssClass: "box worker",
      role: "Admin",
      personId: nanoid(),
    },
    {
      name: "Adam",
      age: 15,
      job: "Front End Developer",
      cssClass: "box worker",
      role: "Customer",
      personId: nanoid(),
    },
    {
      name: "Jan",
      age: 211,
      job: "Front End Developer",
      cssClass: "box worker",
      role: "Customer",
      personId: nanoid(),
    },
  ],
  filter: VisibilityFilters.SHOW_ALL,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_PERSON: {
      const newList = state.peopleList.filter(
        (personEl) => personEl.personId !== action.personId
      );
      return {
        ...state,
        peopleList: newList,
      };
    }
    case FILTER_PEOPLE: {
      let filteredList = INITIAL_STATE.peopleList;
      if (action.role !== "All") {
        filteredList = INITIAL_STATE.peopleList.filter(
          (personEl) => personEl.role === action.role
        );
      }
      return {
        ...state,
        filter: action.role,
        peopleList: filteredList,
      };
    }
    default:
      return state;
  }
};

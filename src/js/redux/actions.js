export const REMOVE_PERSON = "REMOVE_PERSON";
export const FILTER_PEOPLE = "FILTER_PEOPLE";

export const removePerson = (personId) => {
  return {
    type: REMOVE_PERSON,
    personId,
  };
};

export const filterPeople = (role) => {
  return {
    type: FILTER_PEOPLE,
    role,
  };
};

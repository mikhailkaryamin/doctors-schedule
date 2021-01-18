import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "nanoid/async/index.native";

import { StorageKey } from "../../shared/consts";
import NameSpace from "../name-space";

const initialState = {
  doctorsList: null,
  newDoctor: null
};

const ActionType = {
  SET_DOCTORS_LIST: "SET_DOCTORS_LIST",
};

const ActionCreator = {
  setDoctorsList: (doctorsList) => ({
    type: ActionType.SET_DOCTORS_LIST,
    payload: doctorsList,
  }),
};

const Operation = {
  readDoctorsListFromStorage: () => (dispatch) => {
    const getDoctorsList = async () => {
      try {
        let doctorsList;
        const jsonDoctors = await AsyncStorage.getItem(StorageKey);
        if (jsonDoctors !== null) {
          doctorsList = JSON.parse(jsonDoctors);
        } else {
          doctorsList = [];
        }

        dispatch(ActionCreator.setDoctorsList(doctorsList));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };

    getDoctorsList();
  },
  writeNewDoctorToStorage: (newDoctor) => (dispatch, getState) => {
    const setDoctorsList = async () => {
      try {
        const id = await nanoid();
        const currentDoctorsList = getState()[NameSpace.DOCTORS].doctorsList;
        const newDoctorWithId = {
          ...newDoctor,
          id,
        };
        const newDoctorsList = [...currentDoctorsList, newDoctorWithId];

        const jsonDoctorsList = JSON.stringify(newDoctorsList);
        await AsyncStorage.setItem(StorageKey, jsonDoctorsList);
        dispatch(ActionCreator.setDoctorsList(newDoctorsList));

      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };

    setDoctorsList();
  },
  removeDoctorFromStorage: (id) => (dispatch, getState) => {
    const setDoctorsList = async () => {
      try {
        const currentDoctorsList = getState()[NameSpace.DOCTORS].doctorsList;

        const newDoctorsList = currentDoctorsList.filter((doctor) => doctor.id !== id);

        const jsonDoctorsList = JSON.stringify(newDoctorsList);
        await AsyncStorage.setItem(StorageKey, jsonDoctorsList);
        dispatch(ActionCreator.setDoctorsList(newDoctorsList));

      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };

    setDoctorsList();
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_DOCTORS_LIST:
      return {
        ...state,
        doctorsList: action.payload
      };
    default:
      return state;
  }
};

export {
  Operation,
  ActionCreator,
  ActionType,
  reducer,
};

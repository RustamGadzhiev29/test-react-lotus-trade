import React from "react";

export type userType = {
  id: number;
  userName: string;
  isDisable: boolean;
  parameters: {
    activity: string;
    term: string;
    guarantee: string;
    payment: string;
    price: [max: number, step: number, min: number];
    action: string;
  };
};

export const state: Array<userType> = [
  {
    id: 1,
    userName: "ООО ДЖАВА",
    isDisable: true,
    parameters: {
      activity: "-",
      term: "80",
      guarantee: "24",
      payment: "30%",
      price: [3700000, -25000, 2475000],
      action: "-",
    },
  },
  {
    id: 2,
    userName: "ООО СИЭСЭС",
    isDisable: false,
    parameters: {
      activity: "-",
      term: "90",
      guarantee: "24",
      payment: "100%",
      price: [3700000, -25000, 2475000],
      action: "-",
    },
  },
  {
    id: 3,
    userName: "ООО РЕАКТ",
    isDisable: false,
    parameters: {
      activity: "-",
      term: "75",
      guarantee: "22",
      payment: "60%",
      price: [3700000, -25000, 2475000],
      action: "-",
    },
  },
  {
    id: 4,
    userName: "ООО РЕДАКС",
    isDisable: false,
    parameters: {
      activity: "-",
      term: "120",
      guarantee: "36",
      payment: "50%",
      price: [3700000, -25000, 2475000],
      action: "-",
    },
  },
];

export const StateContext = React.createContext<Array<userType>>(state);

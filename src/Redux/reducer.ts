/* eslint-disable prettier/prettier */
const CHANGE_STATUS = "CHANGE-STATUS";

export type userType = {
  id: number;
  userName: string;
  isDisable: boolean;
  parameters: {
    activity: string;
    term: string;
    guarantee: string;
    payment: string;
    price: number[];
    action: string;
  };
};

const initialState = [
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

export const timerReducer = (
  state: userType[] = initialState,
  // eslint-disable-next-line comma-dangle
  action: ActionsType
) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      return [
        ...state.map((d) =>
          d.id === action.id
            ? { ...d, isDisable: true }
            : { ...d, isDisable: false },
        ),
      ];
    }
    default:
      return state;
  }
};

export const changeStatusTypeCreator = (id: number) =>
  ({
    type: CHANGE_STATUS,
    id,
  } as const);

export type ActionsType = ReturnType<typeof changeStatusTypeCreator>;

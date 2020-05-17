import { BANK_BASE_CAPITAL, AMOUNT_MIN, AMOUNT_MAX } from "../helpers/config";

export const initialState = {
    bankAmount: BANK_BASE_CAPITAL,
    minAmount: AMOUNT_MIN,
    maxAmount: AMOUNT_MAX
};

export interface defaultState {
    bankAmount: number,
    minAmount: number,
    maxAmount: number
};

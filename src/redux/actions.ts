type Actions = "EDIT_BANK_AMOUNT" | "EDIT_MAX_AMOUNT" | "EDIT_MIN_AMOUNT";

export interface Action {
  type: Actions;
  value: number;
}

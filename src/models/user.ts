export interface User {
    id: string,
    name: string,
    email: string,
    document: string,
    amount: number,
    dateToPay: Date,
    statusPayCredit: boolean,
    statusCredit: boolean,
    active: boolean
}

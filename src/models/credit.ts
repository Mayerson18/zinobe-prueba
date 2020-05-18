export interface Credit {
    id: string,
    status: boolean,
    reason: string,
    userId: string,
    createdAt: Date,
    dateToPay: Date,
    statusPayCredit: boolean,
    amount: number
}

export interface CreditData {
    status: boolean,
    reason: string,
    userId: string,
    createdAt: Date,
    dateToPay: Date,
    statusPayCredit: boolean,
    amount: number
}

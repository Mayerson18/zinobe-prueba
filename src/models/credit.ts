export interface Credit {
    id: string,
    userId: string,
    amount: number,
    reason: string,
    status: boolean,
    createdAt: Date,
    active: boolean
}

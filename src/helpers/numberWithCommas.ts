export const numberWithCommas = (n: number) => {
    const options = { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    };
    return Number(n).toLocaleString('en', options);
}
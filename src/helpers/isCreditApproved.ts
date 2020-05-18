export const generateRandom = () => {
    const random = Math.random();
    console.log('random :>> ', random);
    return random < 0.5
}

export const buildEspeces = (nbOfFive, nbOfTen, nbOfTwenty, nbOfFifty) => {
    console.log(nbOfFive, nbOfTen, nbOfTwenty, nbOfFifty);
    return {
        billets: [
            {value: 50, number: nbOfFifty},
            {value: 20, number: nbOfTwenty},
            {value: 10, number: nbOfTen},
            {value: 5, number: nbOfFive}
        ]
    }
}
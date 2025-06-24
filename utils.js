function calculateProcessedData(inputValue) {
    const doubledValue = inputValue * 2;
    const adjustedValue = doubledValue + 10;
    const finalValue = adjustedValue / 3;
    return finalValue;
}

module.exports = { calculateProcessedData };
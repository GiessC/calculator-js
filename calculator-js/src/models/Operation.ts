export default interface Operation {
    perform: (firstNumber: number, secondNumber: number) => number;
    getExpression: (firstNumber: number, secondNumber?: number) => string;
}


import Operation from '../Operation';

export default class AddOperation implements Operation {
    perform(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }

    getExpression(firstNumber: number, secondNumber?: number): string {
        if (secondNumber) {
            return `${firstNumber} + ${secondNumber}`;
        }
        return `${firstNumber} +`;
    }
}


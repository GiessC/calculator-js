import Operation from '../Operation';

export default class DivideOperation implements Operation {
    perform(firstNumber: number, secondNumber: number): number {
        return firstNumber / secondNumber;
    }

    getExpression(
        firstNumber: number,
        secondNumber?: number | undefined,
    ): string {
        if (secondNumber) {
            return `${firstNumber} / ${secondNumber}`;
        }
        return `${firstNumber} /`;
    }
}


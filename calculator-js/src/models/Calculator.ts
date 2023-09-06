import Operation from './Operation';

export default class Calculator {
    // TODO: Expression
    // TODO: Entry
    // TODO: Operation
    firstNumber: number;
    secondNumber: number;
    operation: Operation | null; // TODO: temporarily a string, should be its own type though
    entry: string;
    decimalUsed: boolean;

    constructor() {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operation = null;
        this.entry = '';
        this.decimalUsed = false;
    }

    clear(): void {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operation = null;
        this.entry = '';
        this.decimalUsed = false;
    }

    clearEntry(): void {
        this.entry = '';

        const operationSelected = Boolean(this.operation);
        if (!operationSelected) {
            this.firstNumber = 0;
        }
        this.secondNumber = 0;
        this.decimalUsed = false;
    }

    percent(): void {
        const numberEntry = Number(this.entry);
        const entryPercent = numberEntry / 100.0;

        if (entryPercent % 1 > 0) {
            this.decimalUsed = true;
        }

        this.entry = String(entryPercent);
    }

    negate(): void {
        const isNegative = this.entry.charAt(0) === '-';

        if (isNegative) {
            this.entry = this.entry.slice(1);
        } else {
            this.entry = `-${this.entry}`;
        }
    }

    decimal(): void {
        if (this.decimalUsed) return;
        this.entry += '.';
        this.decimalUsed = true;
    }

    performOperation(): void {
        if (!this.operation) return;

        this.secondNumber = Number(this.entry);
        const result: number = this.operation.perform(
            this.firstNumber,
            this.secondNumber,
        );
        this.firstNumber = result;
        this.secondNumber = 0;
    }

    getExpression(): string {
        return `${this.firstNumber} ${this.operation} ${this.secondNumber}`;
    }
}


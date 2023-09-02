import Button from './Button';

const Calculator = () => {
    return (
        <div className='calculator rounded flex flex-col px-4 mx-auto h-5/6 pt-4 pb-4 w-full sm:w-1/2'>
            <div className='textbox w-full h-1/6 rounded mb-2 p-2'>
                <div className='expression h-1/4 text-right'>Expression</div>
                <div className='entry h-3/4 text-right pt-1'>Entry</div>
            </div>
            <div className='buttons grid grid-cols-4 auto-rows-auto gap-2 w-full h-full'>
                <Button>%</Button>
                <Button>CE</Button>
                <Button>C</Button>
                <Button>{`<-`}</Button>
                <Button>1/x</Button>
                <Button>x^2</Button>
                <Button>sqrt(x)</Button>
                <Button>/</Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>x</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>-</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
                <Button>+/-</Button>
                <Button>0</Button>
                <Button>.</Button>
                <Button>=</Button>
            </div>
        </div>
    );
};

export default Calculator;


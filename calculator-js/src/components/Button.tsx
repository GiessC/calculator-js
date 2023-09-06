interface ButtonProps {
    performAction: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
}

const Button = ({ performAction, children }: ButtonProps) => {
    return (
        <div
            className='button rounded text-xl flex justify-center items-center'
            onClick={performAction}
        >
            {children}
        </div>
    );
};

export default Button;


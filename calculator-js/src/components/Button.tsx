interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <div className='button rounded text-xl flex justify-center items-center'>
            {children}
        </div>
    );
};

export default Button;


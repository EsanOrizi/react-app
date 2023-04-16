import React from 'react';

interface Props {
    children: string
    colour?: 'primary' | 'secondary';
    onClick: () => void;

}

const Button = ({children, onClick, colour = 'primary'} : Props) => {
    return (
        <div>
            <button className={'btn btn-' + colour} onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;
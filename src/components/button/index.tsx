import * as React from 'react';

import * as style from './style.scss';

interface IButtonProps {
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large' | 'fullwidth';
    color?: 'default' | 'red' | 'yellow';
    onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
   children,
   disabled = false,
   size = 'medium',
   color = 'default',
   onClick
}) => (
    <button disabled={disabled} className={`
        ${style.button} 
        ${style[`size-${size}`]}
        ${style[`color-${color}`]}
    `} onClick={onClick}>
        {children}
    </button>
);

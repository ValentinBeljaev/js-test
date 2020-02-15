import * as React from 'react';

import * as style from './style.scss';

interface IInputProps {
    value?: string;
    disabled?: boolean;
}

export const Input: React.FC<IInputProps> = ({
     value = '',
     disabled
 }) => (
    <input
        type="text"
        value={value}
        disabled={disabled}
        className={style.default_input}
    />
);

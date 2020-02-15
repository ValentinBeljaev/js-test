import * as React from 'react';

import * as style from './style.scss';

export const Container: React.FC = ({ children }) => {
    return (
        <div className={`${style.container}`}>
            { children }
        </div>
    )
};

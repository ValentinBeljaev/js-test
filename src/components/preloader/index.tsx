import * as React from 'react';

import * as style from './style.scss';

export const Preloader: React.FC = () => {
    return (
        <div className={`${style.preloader}`}>
           Loading ...
        </div>
    )
};

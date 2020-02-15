import * as React from 'react';

import {Container} from "@/components/container";

import * as style from './style.scss';

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.logotype}>
                    Shop Laptops
                </div>
            </Container>
        </header>
    )
};

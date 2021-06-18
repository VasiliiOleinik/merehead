
import React from 'react';
import {
    TheContent,
    TheFooter,
    TheHeader
} from './index';

const TheLayout = () => {
    return (

        <div className="app">
            <TheHeader />
            <TheContent />
            <TheFooter />
        </div>

    )
}
export default TheLayout;
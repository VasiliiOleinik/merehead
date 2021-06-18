
import React from 'react';
import {
    TheContent,
    TheHeader
} from './index';

const TheLayout = () => {
    return (

        <div className="app">
            <TheHeader />
            <TheContent />
        </div>

    )
}
export default TheLayout;
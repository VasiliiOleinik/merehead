import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { setHideAlert } from "src/reducers/alertsReducer";

const Alerts = ({ type, title, text }) => {
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.alert.isVisible);

    if (!isVisible) return null;
    return (
        <Alert
            variant={type}
            className="d-flex justify-content-between"
            dismissible
            onClose={() => dispatch(setHideAlert())}
        >
            <p><strong>{title}</strong> {text}</p>
        </Alert>
    );

};

export default Alerts;
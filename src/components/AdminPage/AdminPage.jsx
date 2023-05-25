import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AdminPage() {
    const store = useSelector((store) => store);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'SAGA_FETCH_RIDES' });
    }, []);

    return (
        <div>
            <h2>Rides to Assign!</h2>
        </div>
    );

}
export default AdminPage;
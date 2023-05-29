import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';


function AdminPage() {
    const store = useReduxStore();

    console.log('store>>>>', store)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'SAGA_FETCH_RIDES' });
    }, []);

    return (
        <div>
            <h2>Rides to Assign!</h2>
            <table className="simpleTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pickup</th>
                        <th>Dropoff</th>
                        <th>Pickup Time</th>
                        <th>Dropoff Time</th>
                        <th>Completed</th>
                        <th>Assigned Driver</th>
                    </tr>
                </thead>
                <tbody>
                    {store.rides.map((ride, index) => (
                        <tr key={index} onClick={() => console.log('clicked', ride.id)}>
                            <td>{index + 1}</td>
                            <td>{ride.pickup_location}</td>
                            <td>{ride.dropoff_location}</td>
                            <td>{ride.pickup_time}</td>
                            <td>{ride.dropoff_time}</td>
                            <td>{ride.is_Complete ? `YES` : `NO`}</td>
                            <td>{ride.user_id === null ? `NOT ASSIGNED` : ride.user_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}
export default AdminPage;
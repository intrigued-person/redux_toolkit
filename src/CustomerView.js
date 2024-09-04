import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './slices/customerSlice';

function CustomerView() {

    const customers = useSelector((state) => state.customers)
    const dispatch = useDispatch();

    function deleteHandler(index) {
        return () => {
            dispatch(deleteCustomer(index));
        }


    }

    return (
        <div>
            <h3>Customer View</h3>
            <ul style={{ listStyleType: 'none' }}>
                {
                    customers.map((customer, index) => <li key={index}>{customer}<button onClick={deleteHandler(index)}>delete</button></li>)
                }
            </ul>
        </div>
    )
}

export default CustomerView
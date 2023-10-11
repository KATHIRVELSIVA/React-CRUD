import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
    // const [data, setData] = useState([])
    const { id } = useParams();

    const [values, setValues] = useState({
        name: '',
        email: '',
        number: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3001/users/' + id)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3001/users/' + id, values)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Update user</h1>
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name"
                            value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="emai" className="form-control" placeholder="Enter Email"
                            value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="number">Number:</label>
                        <input type="text" name="number" className="form-control" placeholder="Enter Phone"
                            value={values.number} onChange={e => setValues({ ...values, number: e.target.value })} />
                    </div>
                    <button className="btn btn-success m-1">Update</button>
                    <Link to="/" className="btn btn-primary m-1">Back</Link>
                </form>
            </div>
        </div>
    );
}
export default Update;
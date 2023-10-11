import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        number: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/users ', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add a user</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name"
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="emai" className="form-control" placeholder="Enter Email"
                            onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="number">Number:</label>
                        <input type="text" name="number" className="form-control" placeholder="Enter Phone"
                            onChange={e => setValues({ ...values, number: e.target.value })} />
                    </div>
                    <button className="btn btn-success m-1">Submit</button>
                    <Link to="/" className="btn btn-primary m-1">Back</Link>
                </form>
            </div>
        </div>
    );
}
export default Create;
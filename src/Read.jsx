import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Read() {
    const [data, setData] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3001/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    },[ ])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <div className="w-75 rounded bg-white border shadow p-4">
                <h3>Detail of Users</h3>
                <div className="mb-2">
                    <strong>Name:{data.name}</strong>
                </div>
                <div className="mb-2">
                    <strong>Email:{data.email}</strong>
                </div>
                <div className="mb-2">
                    <strong>Phone:{data.number}</strong>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    );

}
export default Read;
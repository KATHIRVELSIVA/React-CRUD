import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3001/users ')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to delete?");
        if (confirm) {
            axios.delete('http://localhost:3001/users/' + id)
                .then(res => {
                    window.location.reload();
                }).catch(err => console.log(err));
        }
    }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end ">
                    <Link to="/create" className="btn btn-sm btn-success">Add +</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>NUMBER</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.number}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className="btn btn-info m-1">Read</Link>
                                        <Link to={`/update/${d.id}`} className="btn btn-primary m-1">Edit</Link>
                                        <button onClick={e => handleDelete(d.id)} className="btn btn-danger m-1">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );

}
export default Home;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadClima } from "../redux/actions";


const Home = () => {

    const dispatch = useDispatch();
    const { clima } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadClima())
    }, [])

    return (
        <div>
            <h1>Clima</h1>
            <table className="table table-striped">
                <thead>
                    <tr className="p-3 mb-2 bg-primary text-white">
                        <th>Id</th>
                        <th>Cityid</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>probabilityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lastreporttime (YYYY/MM/DD)</th>
                        <th>Probabilidad de lluvia</th>
                    </tr>
                </thead>
                <tbody>
                    {clima?.map((climas) => (
                        <tr key={climas._id}>
                            <td>{climas._id}</td>
                            <td>{climas.cityid}</td>
                            <td>{climas.name}</td>
                            <td>{climas.state}</td>
                            <td>{climas.probabilityofprecip}</td>
                            <td>{climas.relativehumidity}</td>
                            <td>{climas.lastreporttime.slice(0,8)}</td>
                            <td>{climas.probabilityofprecip > 60 || climas.relativehumidity > 50 ? 'Llueve' : 'No llueve'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
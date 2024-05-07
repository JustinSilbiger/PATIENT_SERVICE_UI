import { HospitalService } from '../utils/api';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const HospitalsList = () => {
    const [hospitalData, setHospitalData] = useState([]);

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const data = await HospitalService.getAllHospitals();
                setHospitalData(data);
            } catch(error) {
                console.log ('Failed to fetch hospitals', error);
            }
        }

        fetchHospitals();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Hospital Name', width: 200 },
        { field: 'address', headerName: 'Address', width: 200 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={hospitalData}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
}

export default HospitalsList;

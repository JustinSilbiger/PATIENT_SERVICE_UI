import { PhysicianService } from '../utils/api';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const PhysiciansList = () => {
  const [physiciansData, setPhysiciansData] = useState([]);

  useEffect(() => {
    const fetchPhysicians = async () => {
        try {
            const data = await PhysicianService.getAllPhysicians();
            setPhysiciansData(data);
        } catch(error) {
            console.log ('Failed to fetch physicians', error);
        }
    }

    fetchPhysicians();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'ssn', headerName: 'SSN', width: 150 },
    { field: 'position', headerName: 'Position', width: 150 },
    { field: 'hospital_id', headerName: 'Hospital ID', width: 150 },
    { field: 'department_id', headerName: 'Department ID', width: 150 },
    { field: 'specialty', headerName: 'Specialty', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={physiciansData}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default PhysiciansList;

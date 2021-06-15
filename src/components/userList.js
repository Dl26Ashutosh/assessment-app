import React,{useEffect, useState} from 'react';
import { DataGrid} from '@material-ui/data-grid';
export default function UserList() {
    const [user,setUserData] =  useState([]);
      const columns  = [
        { field: 'id', headerName: 'Id', width: 50,},
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'username', headerName: 'Username', width: 150},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'address', headerName: 'Address', width: 400 ,
        valueGetter: (params) => {
            console.log({ params });
            let result = [];
            if (params.row.address.street+","+params.row.address.suite+","+params.row.address.city+","+params.row.address.zipcode) {
              if (params.row.address.street+","+params.row.address.suite+","+params.row.address.city+","+params.row.address.zipcode) {
                result.push(params.row.address.street+","+params.row.address.suite+","+params.row.address.city+","+params.row.address.zipcode);
              }
            } else {
              result = ["Unknown"];
            }
            return result.join(", ");
          }},
        { field: 'phone', headerName: 'Phone', width: 200 },
        { field: 'website', headerName: 'Website', width: 150 },
        { field: 'company', headerName: 'Company', width: 400 ,
        valueGetter: (params) => {
            console.log({ params });
            let result = [];
            if (params.row.company.name+","+params.row.company.catchPhrase+","+params.row.company.bs) {
              if (params.row.company.name+","+params.row.company.catchPhrase+","+params.row.company.bs) {
                result.push(params.row.company.name+","+params.row.company.catchPhrase+","+params.row.company.bs);
              }
            } else {
              result = ["Unknown"];
            }
            return result.join(", ");
          }},
      ];

    useEffect(async () => {
            const URL = "https://jsonplaceholder.typicode.com/users";
            await fetch(URL).then(res=> res.json()).then(data=>{setUserData(data)}).catch(err=>console.log(err));
            }, [])
  return (
    <div style={{ height: "100vh", width: '100%' }}>
      <DataGrid rows={user} columns={columns} />
    </div>
  );
}
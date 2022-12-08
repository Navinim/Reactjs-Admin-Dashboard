import React from 'react'
import "./userlist.css"
import { DataGrid} from '@mui/x-data-grid';
import {DeleteOutline }from '@mui/icons-material';
import { userRows } from '../../data';
import {Link} from "react-router-dom"
import {useState} from "react"


export const UserList = () => {
    const [data,setData]=useState(userRows)
     const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id !==id))
     }
    const columns= [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'UserName', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 60,
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell:(params)=>{
                return(
                    <>
                        <Link to={"/user/" +params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListDel' onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        },
                
    ];


    return (
        <div className='userList'>
            <DataGrid rows={data} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick/>
        </div>
    )
}

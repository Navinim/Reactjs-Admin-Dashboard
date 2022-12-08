import "./productslist.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../data';
import { Link } from "react-router-dom"
import { useState } from "react"

export const ProductList = () => {
    const [data, setData] = useState(productRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product Name', width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: 'stock', headerName: 'Stock', width: 130 },

        {
            field: 'price',
            headerName: 'Price',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDel' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },

    ];

    return (
        <div className="productlist">
            <DataGrid rows={data} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

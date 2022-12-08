import "./product.css"
import { Link } from "react-router-dom"
import { Chart } from "../../components/charts/Chart"
import { productData } from "../../data"
import {Publish } from '@mui/icons-material';

export const Product = () => {
    return (
        <div className="productInfo">
            <div className="productTitleContainer" >
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton" >Create</button>
                </Link>
            </div>
            <div className="productTop" >
                <div className="productTopLeft" >
                    < Chart data={productData} dataKey="Sales" title="Sales Indicator" />
                </div>
                <div className="productTopRight" >
                    <div className="productInfoTop" >
                        <img className="productInfoImg" src="https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_960_720.jpg" alt="" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom" >
                        <div className="productInfoItem" >
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">321</span>
                        </div>
                        <div className="productInfoItem" >
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">6321</span>
                        </div>
                        <div className="productInfoItem" >
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem" >
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom" >
                <form className="productForm" >
                <div className="productFormLeft" >
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple Airpods"/>
                    <label>In Stock</label>
                    <select name="inStock" id="idStock" >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active" >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight" >
                <div className="productUpload" >
                <img className="productUploadImg" src="https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_960_720.jpg" alt="" />
                <label for="file">
                    <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
                </div>
                </form>
            </div>
        </div>
    )
}

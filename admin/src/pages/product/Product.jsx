import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../redux/apiCalls";
import { useHistory   } from "react-router-dom";


export default function Product() {
    const navigate = useHistory ();
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector(state => state.product.products.find((product) => product._id === productId));
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };


    const handleClick = (e) => {
        e.preventDefault();
        const filename = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, filename);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL };
                    updateProducts(productId, product, dispatch);
                    navigate.push('/')
                });
            }
        );

    }

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product?.img} alt="" className="productInfoImg" />
                        <span className="productName">{product?.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">{product?._id}</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{product?.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>{"Title"}</label>
                        <input name="title" onChange={handleChange} type="text" placeholder={product.title} />

                        <label>Description</label>
                        <input name="des" onChange={handleChange} type="text" placeholder={product.des} />

                        <label>Price</label>
                        <input name="price" onChange={handleChange} type="text" placeholder={product.price} />



                        <label>In Stock</label>
                        <select name="inStock" onChange={handleChange} id={product._id}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product?.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
                        </div>
                        <button onClick={handleClick} className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

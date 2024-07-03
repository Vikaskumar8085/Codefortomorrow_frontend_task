import { useEffect, useState } from "react";
import apiInstance from "./Redux/apiInstance/apiInstance";
import Loader from "./component/Loader";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "./Redux/slice/LoaderSlice";
import { addProduct } from "./Redux/slice/productSlice";
import ProductCard from "./component/ProductComponent/ProductCard";
import Pagination from "./component/ProductComponent/Pagination";

function App() {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.loader.loading);
  const getalldata = useSelector((state) => state.product.values);
  const [sortBy, setsortBy] = useState("ace");
  const [currentItem, setcurrentItem] = useState(6);
  const [pageNo, setpageNo] = useState(1);

  const getAllProduct = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await apiInstance.get("/posts");
      if (response.status === 200) {
        dispatch(addProduct(response?.data));
        dispatch(SetLoader(false));
      }
    } catch (error) {
      dispatch(SetLoader(false));
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [0]);

  // sorting
  var getItems = getalldata;
  // sorting

  //pagination
  const firstPage = currentItem * pageNo;
  const lastpage = Math.floor(firstPage - currentItem);
  getItems = getalldata?.slice(lastpage, firstPage);
  //pagination

  return (
    <>
      {load && <Loader />}
      <ProductCard getItems={getItems} />
      <Pagination setpageNo={setpageNo} pageNo={pageNo} />
    </>
  );
}

export default App;

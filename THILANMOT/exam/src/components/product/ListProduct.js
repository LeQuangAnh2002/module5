import React,{useState,useEffect} from 'react';
import {Container} from "react-bootstrap";
import * as productService from "../service/ProductService";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Moment from "moment";

function ListProduct() {
    // const navigate = useNavigate();
    const [products,setProducts] = useState([]);

    const [categories,setCategories] = useState([]);
    const [searchInput,setSearchInput] = useState([]);

    const [currentPage,setCurrentPage] = useState(1);
    //đại diện cho số lượng bản ghi (records) được hiển thị trên mỗi trang.
    const recordsPerPage = 5;
    //Dòng này tính toán chỉ số cuối cùng của bản ghi hiển thị trên trang hiện tại. Nó nhân currentPage với recordsPerPage để xác định chỉ số cuối cùng.
    const lastIndex = currentPage * recordsPerPage;
    //Dòng này tính toán chỉ số đầu tiên của bản ghi hiển thị trên trang hiện tại
    const firstIndex = lastIndex - recordsPerPage;
    //Dòng này sử dụng phương thức slice() để trích xuất một phần của mảng products. Chỉ số đầu tiên là firstIndex và chỉ số cuối cùng là lastIndex.
    // Kết quả là một mảng con chứa các bản ghi hiển thị trên trang hiện tại.
    const  records = products.slice(firstIndex,lastIndex);
    console.log(records)
    //Dòng này tính toán số lượng trang dựa trên tổng số bản ghi trong mảng products và recordsPerPage. Math.ceil() được sử dụng để làm tròn lên kết quả để đảm bảo rằng số trang là một số nguyên.
    const  npage = Math.ceil(products.length / recordsPerPage);
    //1.Array(npage + 1) tạo ra một mảng mới với độ dài là npage + 1. Khi bạn truyền một số nguyên làm tham số cho Array(), nó sẽ tạo ra một mảng với độ dài tương ứng.
    //
    // 2.keys() là một phương thức của đối tượng mảng (array), trả về một iterator chứa các chỉ số của mảng. Trong trường hợp này, Array(npage + 1).keys() trả về một iterator chứa các chỉ số từ 0 đến npage.
    //
    //3. [...Array(npage + 1).keys()] sử dụng toán tử spread (...) để chuyển iterator thành một mảng. Kết quả là một mảng chứa các chỉ số từ 0 đến npage.
    //
    // 4.slice(1) là một phương thức của mảng (array) dùng để trích xuất một phần của mảng. Trong trường hợp này, .slice(1) được sử dụng để loại bỏ phần tử đầu tiên (0) khỏi mảng và chỉ giữ lại các số từ 1 đến npage. Kết quả là một mảng chứa các số trang trong phân trang.
    const numbers = [...Array(npage + 1).keys()].slice(1)

     useEffect(()=>{
         getAll();
         getAllCategories();
     },[])
     const getAll = async () =>{
         try {
             const temp = await productService.findAll();
             setProducts(temp)
             setSearchInput(temp)
         }catch (e) {
             console.log(e)
         }
     }
     const  getAllCategories = async () =>{
         try {
            const temp = await productService.getAllCategory();
             setCategories(temp)
         }catch (e) {
             console.log(e)
         }
     }
     const seachInputProduct = (evt) => {
         setSearchInput(products.filter(f => f.productName.toLowerCase().includes(evt.target.value.toLowerCase())));
     }
     const  prePage = () => {
        if (currentPage !== 1){
            setCurrentPage(currentPage -1);
        }
     }
     const  nextPage = () => {
         if(currentPage !== npage){
             setCurrentPage(currentPage + 1);
         }
     }

      const changeCPage = (id) => {

        setCurrentPage(id)
          console.log(id)
      }

     if(!setCategories) return null;
return(
    <Container>

            <h1 style={{ textAlign: "center" }}>List Product</h1>
            <div className="mb-3 mt-5">
                <div className="search" style={{display : "flex", justifyContent : "space-between",alignItems: "center"}} >
                    <select className="type-list" id="type-list" style={{    width: "180px",cursor: "pointer"}}>
                        <option value="[]">All</option>
                        {categories.map((c) => (
                            <option value={JSON.stringify(c)} key={c.id}>{c.name}</option>
                        ))}
                    </select>
                    <input type="text" className="form-control"  placeholder="Tìm kiếm..." onChange={seachInputProduct}  style={{
                        display: "inline-block",
                        width: "400px",
                        height: '35px',
                        padding: "0 10px"}}/>

                </div>
            </div>
            <div>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Ngày Nhập</th>
                    <th>Thể Loại</th>

                </tr>
                </thead>
                <tbody>
                {records?.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{Moment(item.inputDate).format("DD/MM/yyyy")}</td>

                            <td>{item.category.name}</td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
              <nav>
                  <ul className="pagination">
                      <li className="page-item">
                          <a href="#" className="page-link" onClick={prePage}>
                              Previous
                          </a>
                      </li>
                      {
                          numbers.map((n,i) => (
                              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                  <a href="#" className="page-link"
                                     onClick={() => changeCPage(n)} >{n}</a>
                              </li>
                          ))
                      }
                      <li className="page-item">
                          <a href="#" className="page-link" onClick={nextPage}>
                              Next
                          </a>
                      </li>
                  </ul>
              </nav>
            </div>


            <button type="button" className="btn btn-primary"> Create
                <Link to={"/create"} style={{ color: "white", textDecoration: "none" }}>Create</Link>
            </button>
            <hr></hr>

    </Container>
)
}
export default ListProduct;
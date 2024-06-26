import ReactPaginate from "react-paginate";

export default function Paginate() {
    const handlePageClick = (data) =>{
        console.log(data)
    }
return(
    <div>
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={25}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
        />
    </div>
)
}
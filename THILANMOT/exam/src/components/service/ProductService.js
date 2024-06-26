import axios from "axios";

export const findAll = async () =>{
    try {
        const temp = await axios.get("http://localhost:8080/product");
        return temp.data;
    }catch (e) {
        console.log(e);
    }
}
export const createProduct = async(product) =>{
    try{
        const temp = await axios.post("http://localhost:8080/product", product)
        return temp.status;
    }catch (e) {
        console.log(e)
    }
}

export const findById = async(id) =>{
    try {
        const temp = await axios.get("http://localhost:8080/product/" + id);
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export const getAllCategory = async () =>{
    try {
        const temp = await axios.get("http://localhost:8080/categorys")
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export const findByNameSearch = async (nameSearch) => {
    try {
        let temp = await axios.get("http://localhost:8080/product?name_like="+nameSearch)
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};
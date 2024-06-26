import axios from "axios";
export const findAll = async () =>{
    try{
        let temp = await axios.get("http://localhost:8080/customers");
        return temp.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteCustomer = async (id) =>{
    try{
        console.log(id)
        let temp = await axios.delete("http://localhost:8080/customers/" + id);
        return temp.status;
    }catch(e){
        console.log(e);
    }
}
export const createCustomer = async (values) =>{
    try{
        let temp = await axios.post("http://localhost:8080/customers", values);
        return temp.status;
    }catch(e){
        console.log(e);
    }
}
export const getCustomerById = async (id) =>{
    try{
        let temp = await axios.get("http://localhost:8080/customers/" + id);
        return temp.data;
    }catch(e){
        console.log(e);
    }
}
export const updateCustomer = async (id, value) => {
    try {
        let temp = await axios.put("http://localhost:8080/customers/" + id, value);
        return temp.status;
    } catch (e) {
        console.log(e);
    }
}
export const findByNameSearch = async (nameSearch) => {
    try {
        let temp = await axios.get("http://localhost:8080/customers?name_like="+nameSearch)
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};
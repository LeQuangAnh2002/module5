import axios from "axios";
export const findAll = async () =>{
    try{
        let temp = await axios.get("http://localhost:8080/employee");
        return temp.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteEmployee = async (id) =>{
    try{
        console.log(id)
        let temp = await axios.delete("http://localhost:8080/employee/" + id);
        return temp.status;

    }catch(e){
        console.log(e);
    }
}
export const createEmployee = async (values) =>{
    try{
        let temp = await axios.post("http://localhost:8080/employee", values);
        return temp.status;
    }catch(e){
        console.log(e);
    }
}
export const getEmployeeById = async (id) =>{
    try{
        let temp = await axios.get("http://localhost:8080/employee/" + id);
        return temp.data;
    }catch(e){
        console.log(e);
    }
}
export const updateEmployee = async (id, value) => {
    try {
        let temp = await axios.put("http://localhost:8080/employee/" + id, value);
        return temp.status;
    } catch (e) {
        console.log(e);
    }
}

export const getAllEducation = async () =>{
    try{
        const temp = await axios.get("http://localhost:8080/education");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export const getAllPosition = async () =>{
    try{
        const temp = await axios.get("http://localhost:8080/position");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export const getAllDivisiton = async () =>{
   try {
       const temp = await axios.get("http://localhost:8080/division")
       return temp.data;
   }catch (e) {
       console.log(e)
   }
}

export const findByNameSearch = async (nameSearch) => {
    try {
        let temp = await axios.get("http://localhost:8080/employee?name_like="+nameSearch)
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};
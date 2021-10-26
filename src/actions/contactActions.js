import Axios from "axios";
import Contact from "../components/contacts/Contact";
import Contacts from "../components/contacts/Contacts";

export   const   getContacts = () => async dispatch =>{

 const res= await Axios.get("https://jsonplaceholder.typicode.com/users");

 dispatch({
        type:'GET_CONTACTS',
        payload:res.data
    });
}
export const deleteContact = (id)=>{
    return{
        type:'DELETE_CONTACT',
        payload: id
    }
}
export const addContact = (contact)=> async dispatch=>{

    const res = await Axios.post('https://jsonplaceholder.typicode.com/users',contact);
    
    
    dispatch({
        type:'ADD_CONTACT',
        payload:res.data,
        
    })
}
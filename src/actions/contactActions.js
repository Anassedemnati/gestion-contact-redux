import Axios from "axios";


export   const   getContacts = () => async dispatch =>{

 const res= await Axios.get("https://jsonplaceholder.typicode.com/users");

 dispatch({
        type:'GET_CONTACTS',
        payload:res.data
    });
}
export   const   getContact = (id) => async dispatch =>{

    const res= await Axios.get("https://jsonplaceholder.typicode.com/users/"+id);
   
    dispatch({
           type:'GET_CONTACT',
           payload:res.data
       });
   }
   

export const deleteContact = (id)=> dispatch=>{
    
        Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>{
            dispatch({
                type:'DELETE_CONTACT',
                payload: id
            })

        })
        .catch(err=>{
            console.error(err)
        })
    
   
}
export const addContact = (contact)=> async dispatch=>{

    const res = await Axios.post('https://jsonplaceholder.typicode.com/users',contact);
    
    
    dispatch({
        type:'ADD_CONTACT',
        payload:res.data,
        
    })
}
export const UpdateContact = (contact)=> async dispatch=>{

    const res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact)
    .then(res=>
        dispatch({
        type:'UPDATE_CONTACT',
        payload:res.data,
        
    }))
    .catch(err=>{
        console.error(err)
    })
    
    
    
}
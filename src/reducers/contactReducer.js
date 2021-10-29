import Contact from "../components/contacts/Contact";

const initialState = {
  
        contacts: [],
        contact:{}
    

};

export default  function(state= initialState, action){

    switch(action.type){
        case 'GET_CONTACTS':
            return{
                ...state,
                contacts: action.payload
            }
        case 'GET_CONTACT':
            return{
                ...state,
                contact: action.payload
            }

        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(Contact=>Contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        
        default:
            return state;
    }
}

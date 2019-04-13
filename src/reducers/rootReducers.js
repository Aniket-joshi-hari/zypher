const initState = {
	
	persons : [],
    rack : '',
    map : {},
    ContactForm : {}
}




const rootReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'UPDATE_FORM_Data':
            const newPerson = {
                id: Math.random(),
				fname: action.personData.fname,
                lname: action.personData.lname,
                bname :action.personData.bname,
                btype : action.personData.btype,
                btypeother :action.personData.btypeother,
                email : action.personData.email,
                phone: action.personData.phone,
                checkbox : action.personData.checkbox
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
			}
			case 'UPDATE_Rack':
			return{
				...state,
				rack :action.rackid
            }
            
            case 'UPDATE_Map':
            const MapData ={
                address : action.map.address,
                lat : action.map.lat,
                lng : action.map.lng
            }
            return{
                ...state,
                map : {...MapData}
                
            }
            case 'UPDATE_ContactUs':
            const ContactForm ={
              email : action.ContactInfo.email,
              message : action.ContactInfo.message
            }
            return{
                ...state,
                ContactForm : {...ContactForm}
            }
        default:
    }
    return state;

};



export default rootReducer;
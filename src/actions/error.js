import  {AUTH_ERROR, CLEAR_ERROR} from  './types';


export default function authError(error){
 return function(dispatch) {  
            
        dispatch( {
          type: AUTH_ERROR,
          payload: error
        });
        
        //to clear error alert in browser we clear errors after 4000ms
        setTimeout(() => {
          dispatch({
            type: CLEAR_ERROR
          });

        }, 4000);
 };
}

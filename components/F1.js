import Axios from "axios";
import {useEffect} from "react";

function F1()
{
    //HTTP request we need to place inside the lifecycle methods
    //But as we are working with function component there is no lifecycle methods
    //Instead we have the concept called Hooks which helps us to handle the HTTP req
    //useEffect() is used to handle the side Effects

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200) //200 - OK
            {
                console.log(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])
   
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default F1;
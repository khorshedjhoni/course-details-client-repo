import { createBrowserRouter } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
        
    }
])
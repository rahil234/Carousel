
import { Link } from 'react-router-dom'

import './adminNavbar.css'


function AdminNavBar(){


    return(
        <>
    
            <div>
                <div className="h-[65px] w-[100%] bg-white">

                    <div className="h-[65px] w-[100%] flex justify-center items-center space-x-4">
                        <Link to="/admin-list" className="font-medium cursor-pointer" >Home</Link>
                        <Link to="/image-Upload" className="font-medium cursor-pointer">Upload</Link>
                        <Link to="/admin-settings" className="font-medium cursor-pointer">Settings</Link>
                    </div>

                </div>
            </div>


        
        </>
    )
}

export default AdminNavBar
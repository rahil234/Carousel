/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import './adminHome.css'
import axios from 'axios';
import AdminNavBar from '../adminNavBar/AdminNavBar';
import { useNavigate } from 'react-router-dom';


function adminHome() {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [title, setTitle] = useState('');
    
const navigate = useNavigate()
    const handleFileChange = (event) => {
        setSelectedVideo(event.target.files[0]);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };


    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('video_file', selectedVideo);
            formData.append('title', title);

            const response = await axios.post('https://carousal-backend.onrender.com/api/upload/', formData);

            console.log(response.data); 
            navigate('/admin-list')
        } catch (error) {
            console.error('Error posting video and title:', error);
        }
    };

    return (

        <>
         <AdminNavBar/>
            <div className=' main flex justify-center m-3 '>


                <div className="custom-file-upload ">
                    <label htmlFor="file" className="custom-file-label">
                        <div className="icon">
                            <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                    fill=""
                                ></path>{' '}
                            </svg>
                        </div>
                        <div className="text">
                            <span>Click to upload video</span>
                        </div>
                    </label>


                    <input id="file" type="file" accept="video/*" onChange={handleFileChange} />

                </div>
            </div>

            <div className='flex justify-center'>
                <input onChange={handleTitleChange} value={title} className='h-[40px] ml-[10px] mr-[10px] p-2 w-[350px] rounded-md mt-[20px] '  type="text" placeholder='Enter Video Title' />
            </div>
            <div className='vedio-div'>


                {selectedVideo && (
                    <video width="300" height="200" controls>
                        <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

            </div>

            

            <div className='button-div'>
                <button onClick={handleSubmit} className='btn font-medium p-1 rounded-md'>Launch</button>
            </div>


        </>

    );
}

export default adminHome;

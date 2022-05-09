import React,{useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import UploadIcon from '@mui/icons-material/Upload';
import './profile.css';
import baseURL from '../../baseURL';
import axios from 'axios';


function Profile(){

   const [slipCount,setSlipCount] = useState(1);
   const [selectedFile,setData] = useState(null);
   const [filename,setFileName] = useState("Monthly Slip");
   const [monthlyslipList,setMonthlySlip] = useState([{monthlyslip:""}])
   console.log(monthlyslipList);

   function addInput(){

   }
   

   function handleChange(event){
       setData(event.target.files[0]);
       var fname = event.target.files[0].name;
       var len = 12;
       fname = fname.substring(0,len);
       setFileName(fname+'....')
        console.log(event.target.files[0]);
   }

   async function handleSubmit(){
       const fd = new FormData();
       fd.append('image',selectedFile,selectedFile.name);
       console.log(baseURL);
        await axios.post(baseURL,fd)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
   }

   function handleSlipAdd(){
      setMonthlySlip([...monthlyslipList,{monthlyslip:""}])
   }

   function handleSlipRemove(index){
      const list = [...monthlyslipList];
      list.splice(index,1);
      setMonthlySlip(list);
   }


   function handleSlipChange(e,index){
      const {name,value} = e.target;
      const list = [...monthlyslipList];
      list[index][name] = value;
      setMonthlySlip(list)
   }
   


    return (<div id='profile'>
        <div id='profile_box'>
        <div>
           <span id='edit-profile'>Edit Profile</span>
           <div id='image-box'>
           <label for="profile_photo">
           <img id="profile_dp" src="https://picsum.photos/50/50" alt="Profile Image" ></img></label>
           <input id='profile_photo' type="file" accept='image/*' onChange={handleChange}></input>
           <PhotoCameraIcon id="edit-image-button"/>
           </div>
           <div id='profile-form'>
                <div id='first-column'>
                       <div>
                        <label for="fullname">Full Name</label>
                        <input type="text" className="profile_button" />
                        </div>
                        <div>
                        <label for="email">Email</label>
                        <input type="text" className="profile_button" />
                        </div>
                        <div>
                        <label for="bankname">Bank Name</label>
                        <input type="text" className="profile_button" />
                        </div>
                        <div>
                        <label for="ctc">CTC</label>
                        <input type="text" className="profile_button" />
                        </div>
                        <div className='upload_file_left'>
                           <label for="selectedFile">Aadhar Card<div id='upload-here-button'><UploadIcon/>Upload Here</div></label>
                          <input id='selectedFile' type="file" accept='image/*' onChange={handleChange}></input>
                        </div>
                        <div className='upload_file_left'>
                           <label for="selectedFile">PAN Card<div id='upload-here-button'><UploadIcon/>Upload Here</div></label>
                          <input id='selectedFile' type="file" accept='image/*' onChange={handleChange}></input>
                        </div>
                </div>
                <hr/>
                <div id='second-column'>
                    <span id='monthy-heading'>Monthly Slips</span>
                    <hr></hr>
                  {monthlyslipList.map((singleList,index)=>(
                     
                     <div key={index} id='monthly-slip'>
                  <div id='upload-box'>
                    <div className='upload_file_right'>
                          <label for="selectedFile"><span>{filename}</span><div id='upload-here-button'><UploadIcon/>Upload Here</div></label>
                          <input id='selectedFile' name='monthlyslip' type="file" accept='image/*' value={singleList.monthlyslip} onChange={(e) => handleSlipChange(e,index)}></input> 
                    </div>
                    <div id='upload-box_2'>
                    {monthlyslipList.length -1 === index && <div><button onClick={handleSlipAdd}><AddCircleOutlineIcon /></button></div>}
                    {monthlyslipList.length>1 && <div><button onClick={()=>handleSlipRemove(index)}><RemoveIcon/></button></div>}
                    
                    </div>
                 </div>
                 </div>
                  ))}
                </div>
           </div>
           </div>
           <div><button id='save-button' type='submit' onClick={handleSubmit}>Save</button></div>
        </div>
    </div>)
}
export default Profile;
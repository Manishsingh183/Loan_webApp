import React,{useState} from "react";
import { Fragment } from "react";
import CardCanvas from "../CardCanvas/CardCanvas";
import qs from  'qs';
import "./Canvas.css";
import baseUrl from "../../../baseURL";
import axios from "axios";

function Canvas() {
   
    const [updatedTerms,setUpdateTerms] = useState({tenure:"",rate:""});

    function handleChange(event){
        const {name,value} = event.target;
        setUpdateTerms(prevValue=>{
            return {
                ...prevValue,
                [name]:[value]
            }
        });
    }

    async function handleSubmit(e){
       e.preventDefault();
       const data = {
            tenure:updatedTerms.tenure,
            rate:updatedTerms.rate
       }
       const url = baseUrl+'canvas'
       await axios.post(url,qs.stringify(data))
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
    }



    return <Fragment>

            <div id="current">

                <div id="current-offer">
                    <div id="img-name-div">
                        <img className="current-img" src="https://picsum.photos/200/300" alt="profile" />
                        <div id="name-div">Kathy Ford</div>
                    </div>
                    <div id="history-cibil-div">
                        <div id="history-div">History</div>
                        <div id="all-history">
                            <p>Amount Dispersed: 20,000 Rs</p>
                        </div>
                        <div id="cibil-current-div">
                            <p>CIBIL Score: 540</p>
                        </div>
                    </div>
                </div>

                <div id="current-details">
                    <h5>Loan Details Update</h5>
                    <form>
                        <div>Name: Kathy Ford</div>
                        <div>Amount: Rs. 1,25,000</div>
                        <label>Time: 13 Months</label>
                        <input type="number" name="tenure" value={updatedTerms.tenure} onChange={handleChange} />
                        <label>Interest: 5%</label>
                        <input type="number" name="rate" value={updatedTerms.rate} onChange={handleChange} />
                        
                        <button id="send-update-rates-btn" type="submit" onClick={handleSubmit}>Send Update Rates</button>
                    </form>
                </div>

            </div>
            
            <div id="loan-offers">

                <h3>Loan Offers</h3>
                <CardCanvas />

            </div>

    </Fragment>;
}

export default Canvas;
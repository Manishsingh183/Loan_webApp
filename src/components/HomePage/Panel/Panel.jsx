import React,{useState} from "react";
import "./Panel.css";
import axios from 'axios';
import qs from 'qs';

function Panel() {

    const [loanRequest,setLoanRequest] = useState({loanAmount:"",tenure:"",rate:""});
    const baseURL = "http://localhost:4000/"
     
    function handleChange(event){
       const {name,value} = event.target;
       setLoanRequest(prevValue=>{
           return {
               ...prevValue,
               [name]:[value]
           }
       })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            loanAmount: loanRequest.loanAmount,
            tenure: loanRequest.tenure,
            rate: loanRequest.rate
        }
        const url = baseURL+'offer';
        await axios.post(url,qs.stringify(data))
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }


    return <div id="loan-panel-div-inner">

                <div id="loan-panel-inner-inner-div">

                    <div id="user-info">
                        <div id="cibil-div">
                            <p>Your CIBIL Score</p>
                            <p id="cibil-score">530</p>
                        </div>
                        <div id="max-loan-div">
                            <p>Max Loan Amount</p>
                            <p>Rs. 2,00,000</p>
                        </div>
                    </div>

                    <div className="vertical-line"/>

                    <form id="create-loan-post">
                        <div id="request-loan-input-fields">
                        <label>Loan Amount</label>
                        <input id="input-button" type="number" name="loanAmount" value={loanRequest.loanAmount} onChange={handleChange}/>
                        </div>
                        <div id="request-loan-input-fields">
                        <label>Tenure (Months)</label>
                        <input id="input-button" type="number" name="tenure" value={loanRequest.tenure} onChange={handleChange} />
                        </div>
                        <div id="request-loan-input-fields">
                        <label>Interest Rate (%)</label>
                        <input id="input-button" type="number" name="rate" value={loanRequest.rate} onChange={handleChange} />
                        </div>
                        <button id="loan-request-submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                    </form>

                </div>
                
            </div>;
}

export default Panel
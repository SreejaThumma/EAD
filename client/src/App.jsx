import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[Name,setStudentName]= useState("");
const[Roll_No,setRoll_No]= useState("");
const[Sub,setSub]= useState("");
const[Branch,setBranch]= useState("");
const[Section,setSection]= useState("");
const[Year,setYear]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{Name:Name,
Roll_No:Roll_No,
Sub:Sub,
Branch:Branch,
Section:Section,
Year:Year}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="String"
name="Name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Roll_No</b></label>
<input
type="Number"
name="Roll_No"
onChange={(e)=>{
setRoll_No(e.target.value);
}}
required/>
<label><b>Sub</b></label>
<input
type="Boolean"
name="Sub"
onChange={(e)=>{
setSub(e.target.value);
}}
required/>
<label><b>Branch</b></label>
<input
type="String"
name="Branch"
onChange={(e)=>{
setBranch(e.target.value);
}}
required/>
<label><b>Section</b></label>
<input
type="Number"
name="Section"
onChange={(e)=>{
setSection(e.target.value);
}}
required/>
<label><b>Year</b></label>
<input
type="Number"
name="Year"
onChange={(e)=>{
setYear(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;

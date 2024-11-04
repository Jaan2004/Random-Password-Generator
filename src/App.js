import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { lc, nc, sc, uc } from './data/PassChar';

function App() {

  let [uppercase,setuppercase]= useState(false)
  let [lowercase,setlowercase]= useState(false)
  let [symbol,setsymbol]=       useState(false)
  let [numbers,setnumbers]=     useState(false)
let [passwordlength,setpasswordlength]=useState()
let [finalpassword,setfinalpassword]=useState('')

  let createpassword=()=>{
    let finalpass=''
     let charset=''
if (uppercase || lowercase || symbol || numbers){

  if(uppercase) charset+=uc;
  if(lowercase) charset+=lc;
  if(symbol) charset+=sc;
  if(numbers) charset+=nc;
  console.log(charset,charset.length)
  for(let i=0;i<passwordlength;i++){

   finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
  }
  setfinalpassword(finalpass)
  } 
else{
alert("Please Select atleast one Checkbox")
}
  }
let copypass=()=>{
  navigator.clipboard.writeText(finalpassword)
}
  return (
      <>
      <div className='password-box'>
        <h2>Password Generator</h2>

     <div className='passwordboxin'>
      <input type='text' readOnly value={finalpassword}/> <button onClick={copypass}>Copy</button>
      </div>

<div className='passwordlength'>
  <label>Password Length</label>
  <input type='number' max={20} value={passwordlength} onChange={(event)=>setpasswordlength(event.target.value)}/>
</div>

<div className='passwordlength'>
  <label>Include Uppercase Letters</label>
  <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)} />
</div>
<div className='passwordlength'>
  <label>Include Lowercase Letters</label>
  <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
</div>
<div className='passwordlength'>
  <label>Include Numbers</label>
  <input type='checkbox'  checked={numbers} onChange={()=>setnumbers(!numbers)} />
</div>
<div className='passwordlength'>
  <label>Include Symbols</label>
  <input type='checkbox' checked={symbol} onChange={()=>setsymbol(!symbol)} />
</div>

<button className='btn' onClick={createpassword}>Generate Password</button>

      </div>
      </>



  );
}

export default App;

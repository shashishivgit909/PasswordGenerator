import { useState, useCallback, useEffect, useRef } from 'react'


import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref variable : use to refrenece a value 
  const passwordRef = useRef(null);


  //use of useCallBack said that when function runs with chnage  in given dependencies then memoize the function  , i.e for other chnages function is running then it donot memoize the function
  const passWordGenerate = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    for (let index = 1; index <= length; index++) {
      const i = Math.floor(Math.random() * str.length + 1); // to generate arandom integer with in range of string length
      pass += str.charAt(i);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed])



  const copyPasswordToClipboard=()=>{

  }
  
  // this hook said when there is chnages in mentioned dependencies then run the callback function , so above dependencies and this depencies use is different .
  useEffect(() => {
    passWordGenerate();
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type="text"
            value={password}
            className='outline-none p-3 mr-1'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed((prev => !prev))
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setNumberAllowed(prev => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



{/* <div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input 
  type="range"
  min={6}
  max={100}
  value={length}
   className='cursor-pointer'
   onChange={(e) => {setLength(e.target.value)}}
    />
    <label>Length: {length}</label>
</div>
<div className="flex items-center gap-x-1">
<input
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={() => {
        setNumberAllowed((prev) => !prev);
    }}
/>
<label htmlFor="numberInput">Numbers</label>
</div>
<div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
            setCharAllowed((prev) => !prev )
        }}
    />
    <label htmlFor="characterInput">Characters</label>
</div>
</div> */}
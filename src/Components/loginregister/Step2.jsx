import React, { useState } from "react";
import { Input } from "./common";

const FormContainer = () => {

  const[Flag,setFlag]=useState(false);
  const [Flag1, setFlag1] = useState(false);

  return (
    <>
      <div class="row temp">
        <div class="col-md-6">
          <label class="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => setFlag(!Flag)}
            />
            IEEE Member
          </label>
        </div>
        <div class="col-md-6">
          <label class="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => setFlag1(!Flag1)}
            />
            PICT College
          </label>
        </div>
      </div>


          {Flag === true && <Input type="text" placeholder="IEEE Member ID" />}
       

        
       
          {Flag1 === false && (
            <Input type="text" placeholder="Institute" />)}
      
    </>
  );
};

export default FormContainer;

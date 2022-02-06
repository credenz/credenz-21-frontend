import React, { useState } from "react";
import { Input } from "./common";

const FormContainer = (props) => {

  return (
    <>
      <div class="row temp">
        <div class="col-md-6">
          <label class="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => props.setIsIeeeMember(!props.isIeeeMember)}
            />
            IEEE Member
          </label>
        </div>
        <div class="col-md-6">
          <label class="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => props.isPictian(!props.setIsPictian)}
            />
            PICT College
          </label>
        </div>
      </div>


      {props.isIeeeMember === true && <Input type="text" placeholder="IEEE Member ID" value={props.ieeeId} onChange={e => props.setIeeeId(e.target.value)} />}

      {props.isPictian === false && (
        <Input type="text" placeholder="Institute" value={props.college} onChange={e => props.setCollege(e.target.value)} />)}
    </>
  );
};

export default FormContainer;

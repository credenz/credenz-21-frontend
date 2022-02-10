import React, { useState } from "react";
import { Input } from "./common";

const FormContainer = (props) => {

  return (
    <>
      <div className="row temp">
        <div className="col-md-6">
          <label className="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => props.setIsIeeeMember(!props.isIeeeMember)}
            />
            IEEE Member
          </label>
        </div>
        <div className="col-md-6">
          <label className="form-control">
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

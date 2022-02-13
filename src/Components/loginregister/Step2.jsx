import React from "react";
import { Input } from "./common";

const FormContainer = (props) => {
  return (
    <>
      <div className="row temp">
        <div className="col-md-6 mb-2">
          <label className="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => props.setIsIeeeMember(!props.isIeeeMember)}
            />
            IEEE Member
          </label>
        </div>
        <div className="col-md-6 mb-2">
          <label className="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => props.setIsPictian(!props.isPictian)}
            />
            PICT College
          </label>
        </div>
      </div>

      {props.isIeeeMember === true && (
        <Input
          type="text"
          placeholder="IEEE Member ID"
          value={props.ieeeId}
          onChange={(e) => props.setIeeeId(e.target.value)}
        />
      )}

      {props.isPictian === false && (
        <Input
          className="mb-2"
          type="text"
          placeholder="Institute"
          value={props.college}
          onChange={(e) => props.setCollege(e.target.value)}
        />
      )}
      <div className="row temp">
        <div className="col-md-12 mb-2">
          <label className="form-control">
            <input
              type="checkbox"
              name="checkbox"
              onClick={() => props.setIsSenior(!props.isSenior)}
            />
            Senior
          </label>
        </div>
      </div>
    </>
  );
};

export default FormContainer;

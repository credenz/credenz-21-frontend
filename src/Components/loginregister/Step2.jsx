import React from "react";
import { Input, MutedLink } from "./common";

const FormContainer = (props) => {
  return (
    <>
      <div className="row temp">
        <MutedLink
          className="mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.setStep(0);
          }}
        >
          &#60; Go back
        </MutedLink>
        <div className="col-md-6 mb-2">
          <label className="form-control">
            <input
              checked={props.isIeeeMember}
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
              checked={props.isPictian}
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
              checked={props.isSenior}
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

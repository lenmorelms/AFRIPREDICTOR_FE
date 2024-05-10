import React from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import Button from './Button';

const Tournament = ({ logoUrl, heading, text, url, buttonText }) => {
  return (
    <div className="">
      <div className="row">
        {/* Header */}
        <div className="col-12 col-sm-10">
            <Image
                src={logoUrl}
                alt="Team Logo"
                className="img-fluid rounded-border"
                width="100%"
            />
        </div>
      </div>
      <div className="row">
        {/* Body */}
        <div className="col-12">
          <b>{heading}</b>
          <p>{text}</p>
        </div>
      </div>
      <div className="row">
        {/* Footer */}
        <div className="col-12" style={{ paddingBottom: "3px" }}>
            <Link to={url}>
                {/* <button className="btn btn-primary">{buttonText}</button> */}
                <Button
                  className="btn btn-login margin"
                  type="submit"
                  children={buttonText} 
                />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
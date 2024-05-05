import React from "react";
import Image from "./Image";

const Team = ({ logoUrl, name }) => {
    return (
        <>
        <Image
            src={logoUrl}
            alt="team logo"
            className="img-fluid"
            width="100%"
            height="400px"
        />
        <div className="camel-case">{name}</div>
        </>
    );
};

export default Team;
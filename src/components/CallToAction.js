import React from "react";
import Image from "./resusables/Image";
import { Link } from "react-router-dom";
import { serverUrl } from "./resusables/Functions";

const CalltoAction = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              {/* <h2>Get updates from Afrileaugue</h2> */}
              <h2>JOIN OUR COMMUNITIES</h2>

              <div className="container d-flex justify-content-center align-items-center">
  <div className="row flex-lg-row flex-column">
    <div className="col-lg-6">
    <Link to="https://whatsapp.com/channel/0029VaZ7MCOCMY0LyMbpK22o" target="_blank">
    <Image
                  className="img-fluid"
                  src={`${serverUrl}/images/whatsapp_logo.png`}
                  width="150"
                />
    </Link>
    </div>
    <div className="col-lg-6">
    <Link to="https://t.me/afripredictor" target="_blank">
    <Image
                  className="img-fluid"
                  src={`${serverUrl}/images/telegram_icon.webp`}
                  width="150"
                />
    </Link>
    </div>
  </div>
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoAction;

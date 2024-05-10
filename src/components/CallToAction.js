import React from "react";
import Image from "./resusables/Image";
import { Link } from "react-router-dom";
import { serverUrl } from "./resusables/Functions";

const CalltoAction = () => {
  return (
    <>
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              {/* <h2>Get updates from Afrileaugue</h2> */}
              <h2>JOIN OUR COMMUNITIES</h2>

              <div className="">
              <div className="row">
    {/*container d-flex justify-content-center align-items-center flex-lg-row flex-column col-lg-6 col-sm-6*/}
    <div className="col-lg-6 col-sm-6 p-sm-3">
    <Link to="https://whatsapp.com/channel/0029VaZ7MCOCMY0LyMbpK22o" target="_blank">
    <Image
                  className="img-fluid"
                  src={`${serverUrl}/images/whatsapp_logo.png`}
                  width="30%"
                />
    </Link>
    </div>
    <div className="col-lg-6 col-sm-6 p-sm-3">
    <Link to="https://t.me/afripredictor" target="_blank">
    <Image
                  className="img-fluid"
                  src={`${serverUrl}/images/telegram_icon.webp`}
                  width="30%"
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

    </>


  );
};

export default CalltoAction;

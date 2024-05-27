import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/resusables/Button"
import Image from "./resusables/Image";
import { formatDate, getCurrentDateTime, isDeviceLaptop } from "./resusables/Functions";
import Loading from "./LoadingError/Loading";
import ReplaceSpacesWithUnderscores from "../components/resusables/ReplaceSpacesWithUnderscores";
import Toast from "./LoadingError/Toast";
import { toast } from "react-toastify";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 1000,
};

const Uclfinal = () => {
  const [isLaptop] = useState(isDeviceLaptop());
  const dispatch = useDispatch();

  const docValue = (id) => {
    return document.getElementById(id).value;
  };
  
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   const UclfinalData = useSelector((state) => state._fetchUclfinal);
//   const { data, loading, error } = UclfinalData;
//   const uclfinalPredictData = useSelector((state) => state._uclfinalPredict);
//   const { error: predictError } = uclfinalPredictData;

  const handlePrediction = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    
  }, []);
  return (
    <>
    <Toast />
    <div className="zimpsl bg-light" style={{ color: "#000" }}>
        <div className="row zimpsl-fixtures">
            <div className={`table-responsive ${isLaptop ? `col-7` : `col-12`}`}>
              <table className="fixture-board table mt-1" style={{ color: "#000", width: "100%" }}>
                <>
                <tr className="" style={{ backgroundColor: "#ebe9e4", borderRadius: "5px" }}>
                  <td colSpan={isLaptop ? 3 : 5 } className="p-2">
                    <i className="fa fa-calendar" aria-hidden="true" style={{ backgroundColor: "#ebe9e4", fontSize: "30px" }}></i>
                    <h3>Date</h3>
                  </td>
                </tr>
                <tr>
                  <td><Image className="predictor-logo" src={`/Caps_United.jpg`}/><br />Team 1</td>
                  <td>VS</td>
                  <td><Image className="predictor-logo" src={`/Dynamos_FC.jpg`}/><br />Team 2</td>
                </tr>
                <tr>
                  <td>First Team To Score</td>
                  <td>XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>First Goal Minutes</td>
                  <td>XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>XXXXXXXXXX</td>
                  <td>Half Time Score</td>
                  <td>XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>XXXXXXXXXX</td>
                  <td>Full Time Score</td>
                  <td>XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>XXXXXXXXXX</td>
                  <td>Goal Scorers</td>
                  <td>XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>Submit</td>
                </tr>
                </>
              </table>  
            </div>
            <div className={`table-responsive ${isLaptop ? `col-5` : `col-12`}`} style={{color: "#000"}}>
                HOW POINTS ARE AWARDED  
            </div>
        </div>
    </div>
    </>
  );
};

export default Uclfinal;
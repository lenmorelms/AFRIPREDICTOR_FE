import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleData } from "../Redux/Actions";

const SampleScreen = () => {
    const dispatch = useDispatch();
    const sampleData = useSelector((state) => state.sample);
    const { data } = sampleData;

    useEffect(() => {
        dispatch(fetchSampleData('65be171c9a1754d1ba2f50f0'));
    });

    return (
    <>
    <div>SAMPLE SCREEN</div>
    {data && data.map((d) => (
        d.playerPredicted && <div>{d.playerResult.gameweek}</div>
    ))}
    {/* {console.log(data)} */}
    </>
    );
};

export default SampleScreen;
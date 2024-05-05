import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchZimpslGameweeks } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

const Gameweeks = () => {
    const [gameweek, setGameweek] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const gameweeksData = useSelector((state) => state._fetchZimpslGameweeks);
    const { data } = gameweeksData;

    const gameweeks = [];
    data && data.map((d) => {
        gameweeks.push({ value: d, label: `Gameweek ${d}`});
    });
    const gameweekHandler = (gameweek) => {
       setGameweek(gameweek);
       navigate(`/zimpsl/${gameweek.value}`);
    }

    useEffect(() => {
        dispatch(fetchZimpslGameweeks());
    }, [dispatch]);
    return (
        <>
        <Select className="" placeholder="Select Gameweek" options={gameweeks} value={gameweek} onChange={gameweekHandler} />
        </>
    );
};

export default Gameweeks;
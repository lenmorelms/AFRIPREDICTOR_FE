import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayerPoints } from "../Redux/Actions";

const PlayerPoints = () => {
    const dispatch = useDispatch();

    const playerData = useSelector((state) => state._fetchPlayerPoints);
    const { data, loading, error } = playerData;

    useEffect(() => {
        dispatch(fetchPlayerPoints('id'));
    }, [dispatch]);

    return (
        <>Player Points</>
    );
}

export default PlayerPoints;
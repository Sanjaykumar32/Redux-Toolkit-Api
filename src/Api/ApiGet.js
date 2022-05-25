import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getapi } from "../features/counter/counterSlice";

export const ApiGet = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const fatchData = async () => {
    await axios
      .get("https://free-nba.p.rapidapi.com/players", {
        params: { page: page, per_page: "10" },
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5ff8afd798msh26fb333754e9d9fp12a1a4jsna7c6a035317b",
        },
      })
      .then((res) => {
        dispatch(getapi(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fatchData();
  }, []);

  return <></>;
};

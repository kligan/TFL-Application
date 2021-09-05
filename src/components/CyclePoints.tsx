import React, { useState, useCallback } from "react";
import API from "../api";
import Search from "./Search";
import { cyclePointsAction } from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";

const CyclePoints = React.memo(() => {
  const [place, setPlace] = useState<string>("london");
  const [search, setSearch] = useState<boolean>(false);

  const cyclePointsData = useSelector((state: RootState) => {
    return state.cycleReducers.data;
  });
  const dispatch = useDispatch();

  const data = () => {
    API.get(`BikePoint/Search?query=${place}`).then((res) =>
      dispatch(cyclePointsAction(res.data))
    );
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlace(e.target.value);
    },
    [place]
  );

  const handleClick = useCallback(() => {
    data();
    setSearch(true);
  }, [place]);

  return (
    <Search
      handleChange={handleChange}
      handleClick={handleClick}
      state={cyclePointsData}
      search={search}
      place={place}
    />
  );
});

export default CyclePoints;

import React, { useState, useCallback } from "react";
import API from "../../api";
import Search from "./Search";
import { cyclePointsAction } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";

interface IState {
  place: string;
  search: boolean;
}

const CyclePoints = React.memo(() => {
  const [place, setPlace] = useState<IState["place"]>("london");
  const [search, setSearch] = useState<IState["search"]>(false);

  const cyclePointsData = useSelector((state: RootState) => {
    return state.cycleReducers.data;
  });
  const dispatch = useDispatch();

  const data = async () => {
    await API.get(`BikePoint/Search?query=${place}`).then((res) =>
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

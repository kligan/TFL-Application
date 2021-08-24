import React, { useState, useCallback } from "react";
import API from "../api";
import Search from "./Search";

const CyclePoints = React.memo(() => {
  const [state, setstate] = useState<any[]>([]);
  const [place, setPlace] = useState<string>("london");
  const [search, setSearch] = useState<boolean>(false);

  const data = () => {
    API.get(`BikePoint/Search?query=${place}`).then((res) =>
      setstate(res.data)
    );
  };

  const handleChange = useCallback(
    (e: any) => {
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
      state={state}
      search={search}
      place={place}
    />
  );
});

export default CyclePoints;

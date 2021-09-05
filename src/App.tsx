import { useState, useEffect } from "react";
import "./App.css";
import API from "./api";
import ServiceLines from "./components/ServiceLines";
import CycleHire from "./components/CycleHire";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./redux/actions/actions";
import { RootState } from "./redux/reducers";

function App() {
  const [disruptions, setDisruptions] = useState<boolean>(false);
  const [itemClicked, setItemClicked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const storeData = useSelector((state: RootState) => {
    return state.serviceReducers.data;
  });
  const dispatch = useDispatch();

  const data = () => {
    API.get("Line/Mode/tube,overground,dlr/Status?detail=true").then((res) => {
      dispatch(actions(res.data));
    });
  };

  useEffect(() => {
    data();
  }, []);

  const handleClick = (e: any, message: string) => {
    if (e !== 10) {
      setDisruptions(true);
      setItemClicked(true);
      setMessage(message);
    } else if (e === 10) {
      setDisruptions(false);
      setItemClicked(true);
    }
  };

  return (
    <div className="Main">
      <ServiceLines state={storeData} handleClick={handleClick} />
      <CycleHire
        disruptions={disruptions}
        itemClicked={itemClicked}
        message={message}
      />
    </div>
  );
}

export default App;

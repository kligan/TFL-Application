import { useState, useEffect } from "react";
import API from "../../api";
import ServiceLines from "./ServiceLines";
import ServiceInfo from "./ServiceInfo";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/actions";
import { RootState } from "../../redux/reducers";

interface IState {
  disruptions: boolean;
  itemClicked: boolean;
  message: string;
}

function App() {
  const [disruptions, setDisruptions] = useState<IState["disruptions"]>(false);
  const [itemClicked, setItemClicked] = useState<IState["itemClicked"]>(false);
  const [message, setMessage] = useState<IState["message"]>("");

  const storeData = useSelector((state: RootState) => {
    return state.serviceReducers.data;
  });
  const dispatch = useDispatch();

  const data = async () => {
    await API.get("Line/Mode/tube,overground,dlr/Status?detail=true").then(
      (res) => {
        dispatch(actions(res.data));
      }
    );
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
      <ServiceInfo
        disruptions={disruptions}
        itemClicked={itemClicked}
        message={message}
      />
    </div>
  );
}

export default App;

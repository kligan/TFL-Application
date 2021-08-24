import { useState, useEffect } from "react";
import "./App.css";
import API from "./api";
import ServiceLines from "./components/ServiceLines";
import CycleHire from "./components/CycleHire";

function App() {
  const [state, setState] = useState<any[]>([]);
  const [disruptions, setDisruptions] = useState<boolean>(false);
  const [itemClicked, setItemClicked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const data = () => {
    API.get("Line/Mode/tube,overground,dlr/Status?detail=true").then((res) => {
      setState(res.data);
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
      <ServiceLines state={state} handleClick={handleClick} />
      <CycleHire
        disruptions={disruptions}
        itemClicked={itemClicked}
        message={message}
      />
    </div>
  );
}

export default App;

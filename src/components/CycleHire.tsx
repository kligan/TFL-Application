import { Link } from "react-router-dom";
export default function CycleHire(props: any) {
  const { disruptions, itemClicked, message } = props;
  return (
    <div className="content">
      <div className="cyclePoints">
        <Link to="/cyclePoints">Cycle Hire</Link>
      </div>
      <div>
        {disruptions && itemClicked ? (
          <div>
            <h1>Service currently suffering disruptions</h1>
            <p>{message}</p>
          </div>
        ) : !disruptions && itemClicked ? (
          <h1>No service disruptions</h1>
        ) : null}
      </div>
    </div>
  );
}

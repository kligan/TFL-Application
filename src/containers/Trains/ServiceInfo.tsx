import CycleHire from "../Cycles/CycleHire";

interface IProps {
  disruptions: boolean;
  itemClicked: boolean;
  message: string;
}
export default function ServiceInfo(props: IProps) {
  const { disruptions, itemClicked, message } = props;
  return (
    <div className="content">
      <CycleHire />
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

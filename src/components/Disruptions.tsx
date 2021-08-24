import WarningIcon from "@material-ui/icons/Warning";

export default function Disruptions(props: any) {
  const { disruptions } = props;
  return (
    <div>
      {disruptions.map((ele: any, index: any) => {
        return (
          <div className="disruptions" key={index}>
            {ele.statusSeverity !== 10 && index === 0 ? <WarningIcon /> : null}
          </div>
        );
      })}
    </div>
  );
}

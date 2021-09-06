import WarningIcon from "@material-ui/icons/Warning";

interface IProps {
  disruptions: [];
}

export default function Disruptions(props: IProps) {
  const { disruptions } = props;
  return (
    <div>
      {disruptions.map((ele: any, index: number) => {
        return (
          <div className="disruptions" key={index}>
            {ele.statusSeverity !== 10 && index === 0 ? <WarningIcon /> : null}
          </div>
        );
      })}
    </div>
  );
}

import NightsStayIcon from "@material-ui/icons/NightsStay";

interface IProps {
  serviceTypes: [];
}

export default function NightService(props: IProps) {
  const { serviceTypes } = props;
  return (
    <div>
      {serviceTypes.map((serviceType: any, index: number) => {
        return (
          <div className="serviceType" key={index}>
            {serviceType.name === "Night" && <NightsStayIcon />}
          </div>
        );
      })}
    </div>
  );
}

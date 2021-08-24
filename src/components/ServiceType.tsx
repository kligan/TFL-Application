import NightsStayIcon from "@material-ui/icons/NightsStay";

export default function ServiceType(props: any) {
  const { serviceTypes } = props;
  return (
    <div>
      {serviceTypes.map((serviceType: any, index: any) => {
        return (
          <div className="serviceType" key={index}>
            {serviceType.name === "Night" && <NightsStayIcon />}
          </div>
        );
      })}
    </div>
  );
}

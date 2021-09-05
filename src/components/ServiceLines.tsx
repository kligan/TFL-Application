import { Paper, MenuItem, MenuList } from "@material-ui/core";
import ServiceType from "./ServiceType";
import Disruptions from "./Disruptions";

export default function ServiceLines(props: any) {
  const { state, handleClick } = props;
  return (
    <div className="App">
      <Paper>
        {state.map((item: any, index: number) => {
          const { modeName, name, lineStatuses, serviceTypes } = item;
          return (
            <MenuList className="menuItem" key={index}>
              <MenuItem
                style={{ marginBottom: "10px" }}
                onClick={() =>
                  handleClick(
                    lineStatuses[0].statusSeverity,
                    lineStatuses[0].reason
                  )
                }
              >
                <div>
                  <p>{modeName.toUpperCase()}</p>
                  <div className="serviceInfo">
                    <div>
                      <p>{name}</p>
                    </div>
                    <ServiceType serviceTypes={serviceTypes} />
                    <Disruptions disruptions={lineStatuses} />
                  </div>
                </div>
              </MenuItem>
            </MenuList>
          );
        })}
      </Paper>
    </div>
  );
}

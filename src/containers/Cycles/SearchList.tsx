import { List } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
  state: [];
  place: string;
  search: boolean;
}

export default function SearchList(props: IProps) {
  const { state, search, place } = props;
  return (
    <div>
      <div>
        {state.map((item: any, index: number) => {
          return (
            <List key={index}>
              {search && (
                <div>
                  <p>
                    {item.id.replace(/[^\d.-]/g, "")} {item.commonName} (
                    {item.lat}, {item.lon})
                  </p>
                </div>
              )}
            </List>
          );
        })}
        {search && state.length === 0 ? (
          <h1>No bike points found for '{place.toUpperCase()}'</h1>
        ) : null}
      </div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

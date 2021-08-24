import { List, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Search(props: any) {
  const { handleChange, handleClick, state, search, place } = props;
  return (
    <div className="Search">
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        size="small"
        style={{ marginRight: "15px", width: "350px" }}
      />
      <Button
        style={{ height: "40px" }}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        Search
      </Button>
      <div>
        {state.map((item: any, index: any) => {
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

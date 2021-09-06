import { TextField, Button } from "@material-ui/core";
import SearchList from "./SearchList";

interface IProps {
  handleChange: (...args: any) => void;
  handleClick: (...args: any) => void;
  state: [];
  place: string;
  search: boolean;
}
export default function Search(props: IProps) {
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
      <SearchList state={state} search={search} place={place} />
    </div>
  );
}

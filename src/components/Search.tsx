import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";

interface SearchProps {
  handleSearchNote: (searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchNote(e.target.value)}
      />
    </div>
  );
}

export default Search;

import React from "react";
import { Wrapper } from "../../../../common/Wrapper";
import { ClearInput, SearchFlex, ClearIcon } from "./styled";
import { Input } from "../Input";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

const SearchTasks = () => {
  const [searchParams, setSearchParams] = useSearchParams({ szukaj: "" });
  const inputRef = useRef(null);

  const query = searchParams.get("szukaj");

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ szukaj: target.value });
    }
  };

  const onClearInput = () => {
    let value = inputRef.current.value;
    if (value === "") return;

    value = "";
    searchParams.delete("szukaj");
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <SearchFlex>
        <Input
          ref={inputRef}
          search
          placeholder="Search..."
          value={query || ""}
          onChange={onInputChange}
        />
        <ClearInput onClick={onClearInput}>
          <ClearIcon />
        </ClearInput>
      </SearchFlex>
    </Wrapper>
  );
};

export default SearchTasks;

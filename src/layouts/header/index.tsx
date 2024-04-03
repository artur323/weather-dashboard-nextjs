import React from "react";

import Container from "components/Container";
import SearchInput from "components/SearchInput";

const Header = () => {
  return (
    <div className="p-10 tablet:p-4 text-center bg-sky-500 mobile:flex-col mobile:gap-y-5">
      <Container>
        <div className="flex items-center justify-between tablet:space-y-4 tablet:flex-col tablet:items-start">
          <h2 className="text-4xl font-bold text-white">Weather</h2>
          <div className="self-end">
            <SearchInput />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

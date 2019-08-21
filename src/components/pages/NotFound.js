import React from "react";

import SecondaryTitle from "components/titles/SecondaryTitle";

function NotFound() {
  return (
    <React.Fragment>
      <SecondaryTitle
        className="not-found-title"
        value="Sorry this page was not found!"
      />
    </React.Fragment>
  );
}

export default NotFound;

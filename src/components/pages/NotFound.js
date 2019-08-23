import React from "react";
import { withRouter } from "react-router-dom";

import SecondaryTitle from "components/titles/SecondaryTitle";

function NotFound({ location: { pathname } }) {
  return (
    <React.Fragment>
      <SecondaryTitle
        className="not-found-title"
        value={`Sorry, ${pathname} was not found!`}
      />
    </React.Fragment>
  );
}

export default withRouter(NotFound);

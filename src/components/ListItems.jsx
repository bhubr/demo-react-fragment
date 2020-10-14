import React from 'react';

// <> et </> sont des raccourcis pour
// <React.Fragment> et </React.Fragment>
function ListItems(props) {
  return (
    <>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
    </>
  );
}

export default ListItems;

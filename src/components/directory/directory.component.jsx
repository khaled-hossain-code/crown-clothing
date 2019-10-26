import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selector";

export function Directory() {
  const { sections } = useSelector(
    createStructuredSelector({ sections: selectSections })
  );

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}

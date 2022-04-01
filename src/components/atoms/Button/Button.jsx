import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

function Button({
  children,
  styles,
  id,
  className,
  onClick,
  linkTo,
  type,
  tabIndex,
  icon,
}) {
  const button = (
    <button
      id={id}
      className={`Button ${className} ${icon && "with-icon"}`}
      type={type}
      style={styles}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {!!icon && <div className="Button-icon">{icon}</div>}
      <span>{children}</span>
    </button>
  );

  return <>{linkTo ? <Link style={{textDecoration: "none"}} to={linkTo}>{button}</Link> : button}</>;
}

export { Button };

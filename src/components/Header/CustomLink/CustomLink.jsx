import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ children, className, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={`${className}${match ? " active" : ""}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

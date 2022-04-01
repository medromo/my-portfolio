import React from "react";
import { Header } from "@molecules/Header/Header";

import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="MainLayout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}

export { Layout };

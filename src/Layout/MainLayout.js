import React from "react";import Header from "../components/Header";
const Layout = ({ children }) => {
  return (
    <div className="App flex flex-col sh max-h-screen h-screen">
      <Header className="flex-grow-0 flex-shrink-0 " />
      <main className="flex-1 p-4 h-auto overflow-auto">
        <div className="container mx-auto"> {children}</div>
      </main>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Routes from "../routes/index";
import { AppContextProvider } from "../utils/context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TERTIARY_COLOR } from "../common/colors";

const Div = styled.div`
  height: 100%;
  background-color: ${TERTIARY_COLOR};
  color: white;
`;

const router = createBrowserRouter(Routes);

const AppWrapper = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [activeSideNav, setActiveSideNav] = useState("");
  // const [permissions, setPermissions] = useState({});
  // const [userType, setUserType] = useState(false);
  // const [userId, setUserId] = useState(null);
  // const [activeChildSideNav, setActiveChildSideNav] = useState("");

  const contextValue = {
    pageTitle,
    setPageTitle,
    activeSideNav,
    setActiveSideNav,
    // permissions,
    // setPermissions,
    // activeChildSideNav,
    // setActiveChildSideNav,
    // userType,
    // setUserType,
    // userId,
    // setUserId,
  };

  useEffect(() => {
    document.title = `Test form ${pageTitle !== "" ? ` | ${pageTitle}` : ""}`;
  }, [pageTitle]);

  return (
    <AppContextProvider value={contextValue}>
      <Div>
        <RouterProvider router={router} />
      </Div>
    </AppContextProvider>
  );
};

export default AppWrapper;

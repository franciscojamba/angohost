import React from "react";

import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import Home from ""
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);


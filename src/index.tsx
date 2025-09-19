import React, { useState } from "react";
import "./App.module.scss";
import {createRoot} from "react-dom/client";
import App from "@/App";

type AppProps = {
    title?: string;
};

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
    <App />
)

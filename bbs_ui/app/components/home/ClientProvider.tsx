"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

interface ClientProviderProps {
    children : React.ReactNode
}

export default function CliantProvider({children}:ClientProviderProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}


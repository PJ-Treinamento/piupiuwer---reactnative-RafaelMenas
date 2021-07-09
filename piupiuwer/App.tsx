import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import AppStack from "./src/routes/AppStack";
import { Routes } from "./src/routes/routes";
import {AuthProvider} from './src/hooks/useAuth';
import AppProvider from "./src/hooks";

export default function App() {
  return (
    <>
      <AppProvider>
        <AuthProvider>
        <Routes />
        <StatusBar style="auto" />
        </AuthProvider>
      </AppProvider>
    </>
  );
}

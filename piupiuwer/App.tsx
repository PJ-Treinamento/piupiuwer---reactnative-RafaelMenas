import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import AppStack from "./src/routes/AppStack";
import { Routes } from "./src/routes/routes";
import {AuthProvider} from './src/hooks/useAuth';

export default function App() {
  return (
    <>
      <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
      </AuthProvider>
    </>
  );
}

import React from "react";
import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<HomeScreen />}></Route>
    </>
  )
);

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;

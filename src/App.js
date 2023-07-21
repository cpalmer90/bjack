import "./App.css";
import "./Compontents/Main/Main";
import "./Compontents/Footer/Footer";
import "./Compontents/Header/Header";
import "./Data.json";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

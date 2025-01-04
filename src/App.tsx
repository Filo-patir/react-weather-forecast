import React from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import { Panel } from "./components/Panel.tsx";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-4 w-full py-8 sm:flex-row">
        <Panel className="flex-1 w-full sm:w-auto" >
          <h2 className="text-3xl py-6">Alexandria</h2>
          <div className="flex flex-col items-center justify-center py-6">
            <h1 className="text-6xl font-bold">09:03</h1>
            <p>Thurdsay, 31 Aug</p>
          </div>
        </Panel>
        <Panel className="flex-1" >
          <div>
            <p>Today</p>
          </div>
          <div>
            <p>Tomorrow</p>
          </div>
          <div>
            <p>Next Day</p>
          </div>
        </Panel>
      </main>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./permanents/components/header/header";
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './App.scss';
import { QueryClient, QueryClientProvider } from "react-query"
import { Player } from './permanents/components/player/player';
import { useState } from 'react';

function App() {
  const [livePlayer,setLivePlayer] = useState();

  const handleDataLivePlayer = (newData) => {
    
    setLivePlayer(newData);
  }
  return (
    <div className="App h-screen">


      <Router>
        <header>
          <Header handleDataLivePlayer={handleDataLivePlayer} />
        </header>
        <main >
          <Player livePlayerData={livePlayer} />
          <Routes>

          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;

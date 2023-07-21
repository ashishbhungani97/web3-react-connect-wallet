import React from 'react';
import CoinbaseWalletCard from './components/connectorCards/CoinbaseWalletCard'
import MetaMaskCard from './components/connectorCards/MetaMaskCard'
import WalletConnectV2Card from './components/connectorCards/WalletConnectV2Card'
import ProviderExample from './components/ProviderExample'
import { metaMask } from './connectors/metaMask';

function App() {
  return (
    <div className="App">
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
        <WalletConnectV2Card />
        <CoinbaseWalletCard />
      </div>
      <button type='button' onClick={()=>metaMask.activate()}>Connect Wallet</button>
    </div>
  );
}

export default App;

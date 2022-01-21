import './App.css';
import Coin from './components/Coin';
import {useEffect,useState} from 'react';
import Axios from 'axios';

function App() {

  const[ListOfCoins, setListOfCoins] = useState([])
  const[SearchWord, setSearchWord] = useState('')

  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    .then((response)=>{
      console.log(response.data);
      setListOfCoins(response.data.coins)
    })
  },[])

  const filteredCoins = ListOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(SearchWord.toLowerCase());
  })

  return (
    <div className="App">
      <nav>
        <h2>Live Crypto Prices</h2>
      </nav>
      <header>
        <input type="text" placeholder='Bitcoin....' onChange={(e)=>{setSearchWord(e.target.value)}} />
      </header>
      <main>
        {filteredCoins.map((coin,id)=>{
          return(
            <Coin 
              key={id}
              name={coin.name} 
              icon={coin.icon} 
              price={coin.price} 
              symbol={coin.symbol}
            />
          )
        })}
      </main>
      <footer>
        <p>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments. Cryptocurrency is stored in digital wallets. Cryptocurrency received its name because it uses encryption to verify transactions.</p>
        <p>Copyright © 2022 debopriyadas721@gmail.com</p>
        <a href="https://documenter.getpostman.com/view/5734027/RzZ6Hzr3#8c32f517-5bb6-4f3a-b36d-ea2a754082ee" target="_blank" rel="noreferrer">API link</a>
      </footer>
    </div>
  );
}

export default App;

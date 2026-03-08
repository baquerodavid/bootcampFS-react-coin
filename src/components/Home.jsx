import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const [coins, setCoins] = useState('');
  const urlCoin = 'https://rest.coincap.io/v3/assets'
  
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(urlCoin + import.meta.env.VITE_API_KEY);

        if (!response.ok) {
          throw new Error('Criptomonedas no encontradas');
        }

        const data = await response.json();
        setCoins(data);
      } catch (err) {
        setCoins('')
      }
    };

    fetchCoins();
  }, [])
  
  return (
    <>
      <h1 className={styles.title}>Criptomonedas</h1>
      <div className={styles.container}>
        {coins.data?.map((coin) => (
          <div className={styles.card} key={coin.id}>
            <p>{coin.name} - {coin.symbol}</p>
            <Link to={'/coin/' + coin.id}>Ver más</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
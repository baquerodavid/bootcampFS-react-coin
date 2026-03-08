import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Coin.module.css';

function Coin() {
  const [coin, setCoin] = useState('');
  const urlCoin = 'https://rest.coincap.io/v3/assets/';
  const { id } = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(
          urlCoin + `${id}` + import.meta.env.VITE_API_KEY,
        );

        if (!response.ok) {
          throw new Error('Cripto no encontrada');
        }

        const data = await response.json();
        setCoin(data);
      } catch (err) {
        setCoin('');
      }
    };

    fetchCoin();
  }, []);

  const formatter = new Intl.NumberFormat('es-ES', {
    maximumFractionDigits: 2
  });

  return (
    <>
      <div className={styles.containerCoin}>
        <h2 className={styles.title}>{coin.data?.name}</h2>
        <p>
          Símbolo: <span className={styles.symbol}>{coin.data?.symbol}</span>
        </p>
        <p>
          Precio:{' '}
          <span className={styles.price}>
            {formatter.format(coin.data?.priceUsd)} $
          </span>
        </p>
        <p>
          Cambio porcentual en las últimas 24 horas:{' '}
          <span
            className={
              coin.data?.changePercent24Hr >= 0
                ? styles.positive
                : styles.negative
            }
          >
            {formatter.format(coin.data?.changePercent24Hr)} %
          </span>
        </p>
        <p>
          Valor máximo en las últimas 24 horas:{' '}
          <span>{formatter.format(coin.data?.vwap24Hr)} $</span>
        </p>
      </div>
    </>
  );
}

export default Coin;

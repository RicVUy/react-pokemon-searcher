import React, {useState, useEffect, useSyncExternalStore} from 'react'
import StockContainer from '../StockContainer/StockContainer'

function MainContainer() {
    const [stocks, setStocks] = useState([])
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        fetch("http://localhost:4001/stocks")
        .then(r => r.json())
        .then(setStocks)
    },[])

    console.log(stocks)
    return (
       <div>
      <StockContainer stocks = {stocks}/>
        </div>
    )
}

export default MainContainer

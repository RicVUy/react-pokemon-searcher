import React, {useState, useEffect, useSyncExternalStore} from 'react'
import StockContainer from '../StockContainer/StockContainer'
import PortfolioContainer from '../PortfolioContainer/PortfolioContainer'

function MainContainer({onStockClick}) {
    const [stocks, setStocks] = useState([])
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        fetch("http://localhost:4001/stocks")
        .then(r => r.json())
        .then(setStocks)
    },[])

    console.log(stocks)
    function handleAddStockPortfolio (addedStock) {
        const foundStock = portfolio.find(stock => stock.id === addedStock.id)
        if (!foundStock) {
            setPortfolio([...portfolio, addedStock])
        }
    }
       
    //console.log(portfolio)
    return (
       <div className='row'>
        <div className='col-8'>
      <StockContainer stocks = {stocks}
      onStockClick = {handleAddStockPortfolio}/>
      </div>
      <div className='col-4'>
      <PortfolioContainer portfolio={portfolio}/>
      </div>
        </div>
    )
}

export default MainContainer

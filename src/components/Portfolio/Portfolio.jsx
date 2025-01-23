import React, {useState} from 'react'
import PortfolioContainer from '../PortfolioContainer/PortfolioContainer'

function Portfolio() {
    const [portfolio, setPortfolio] = useState([])

    function handleAddStockPortfolio (addedStock) {
        const foundStock = portfolio.find(stock => stock.id === addedStock.id)
        if (!foundStock) {
            setPortfolio([...portfolio, addedStock])
        }
    }
    console.log(portfolio)

    return (
        <div className='col-4'>
            <PortfolioContainer portfolio={portfolio} onStockClick={handleAddStockPortfolio}/>
        </div>
    )
}

export default Portfolio

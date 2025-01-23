import React from "react";
import Stock from "../Stock/Stock";

function PortfolioContainer({portfolio, onStockClick}) {   
    const portfolioList = portfolio.map(stock => (
        <Stock key={stock.id} stock={stock} onStockClick={onStockClick}/>
    ))


    return (
     <div>
        <h2>My portfolio</h2>
        {portfolioList}
     </div>   
    )
}

export default PortfolioContainer

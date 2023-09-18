import { selectedPortfolio } from "@features/portofolioManager";
import Layout from "components/Layout"
import { Transaction } from "interfaces/Tickers";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hook";
import APIRequest from "utils/ApiRequest";

const Transactions = () => {
    const portfolio = useAppSelector(selectedPortfolio);
    const [history, setHistory] = useState<Transaction[]>([]);
    useEffect(() => {
        if (portfolio && portfolio?._id != "") {
            APIRequest.GetTransaction(portfolio._id)
                .then(result => {
                    setHistory(result);                
                })
        }
    }, [portfolio])
    return <Layout>
        <div>Transaction</div>
        <div className="grid grid-cols-2">
            <div>
                <span>{portfolio?.name} {portfolio?._id}</span>
                <ul>
                    {portfolio?.stocks.map((x) => <li key={x.stock._id}>{x.stock.description}</li>)}
                </ul>
            </div>
            <div>
                <div>History</div>
                <ul>
                    {history.map(x => <li key={x._id}>{x.executedDate}: {x.quantity}@{x.stockPrice}</li>)}
                </ul>
            </div>
        </div>
    </Layout>

}

export default Transactions;
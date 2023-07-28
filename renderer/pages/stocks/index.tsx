import Layout from "components/Layout";

const StockIndex = () => {
    return <Layout>
        <div className="main-content flex flex-col">
            <h1 className="text-center">Stock List</h1>
            <div className="grid grid-cols-2 w-full h-full">
                <div className="bg-red-200">a</div>
                <div className="bg-blue-200 h-full">b</div>
            </div>
        </div>
    </Layout>
}

export default StockIndex;
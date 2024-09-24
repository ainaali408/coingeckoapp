import CoinInfo from "./CoinInfo";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
// import currencyStore from '../../State/store'
import useFetchCoinHistory from "../Hooks/useFetchCoinHistory";
// import { useQuery } from 'react-query';
// import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
// import { useState } from "react";


function CoinInfoContainer( {coinId} ) {
    console.log('coinid',coinId)
    const { historicData, isError, isLoading, currency, days, setDays, setCoinInterval } = useFetchCoinHistory(coinId)

    // const {currency} = currencyStore()

    // const[days,setDays] = useState(7);
    // const[interval,setCoinInterval] =useState('daily')

    // const {data:historicData,isLoading,isError} = useQuery(['coinHistory',coinId,currency,days,interval],
    //     ()=>fetchCoinHistoricData(coinId,currency,days,interval),{
    //         cacheTime:1000*60*2,
    //         staleTime:1000*60*2,
    //     })

    // const { data:historicData, isError, isLoading, currency, days, setDays, setCoinInterval } =
    //  useFetchCoinHistory(coinId);

    if(isLoading) {
        return <PageLoader />
    }

    if(isError) {
        return <Alert message="Error fetching data" type="error" />
    }

    return (
        <>
            <CoinInfo 
                historicData={historicData} 
                setDays={setDays} 
                setInterval={setCoinInterval} 
                days={days}
                currency={currency}
            />
        </>
    );
}

export default CoinInfoContainer;
import { useEffect, useState } from "react";
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualdata = await res.json();
      setData(actualdata.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1 className="heading">Live🔴</h1>
        <h1 className="heading">Covid-19 Tracker App</h1>
        <div className="maincard">
          <div className="cardactive">
            <h1>Total Active</h1>
            <p>{data.active}</p>
          </div>
          <div className="cardrecovered">
            <h1>Total Recovered</h1>
            <p>{data.recovered}</p>
          </div>
          <div className="cardconfirmed">
            <h1>Total Confirmed</h1>
            <p>{data.confirmed}</p>
          </div>
          <div className="cardeaths">
            <h1>Total Deaths</h1>
            <p>{data.deaths}</p>
          </div>
          <div className="carddelta">
            <h1>DeltaDeaths</h1>
            <p>{data.deltadeaths}</p>
          </div>
          <div className="cardupdated">
            <h1>Last updated</h1>
            <p>{data.lastupdatedtime}</p>
          </div>
        </div>
        <p className="footer"> &copy; Copy right Reserved 2023 Talha Nawaz</p>
      </section>
    </>
  );
};
export default Covid;

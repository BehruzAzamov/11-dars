import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(jsonArray => {
        const filteredArray = jsonArray.slice(0, limit);
        setData(filteredArray);
      });
  }, [limit]);

  function requestMoreData() {
    setLimit(prevLimit => prevLimit + 6);
  }

  function switchViewMode(id) {
    if (id) {
      setDisplayGrid(prevDisplayGrid => !prevDisplayGrid);
      setDetail(data.find(entry => entry.id === id) || {});
    } else {
      setDisplayGrid(true);
    }
  }

  return (
    <>
      <Header switchViewMode={switchViewMode} />
      {displayGrid ? (
        <SearchPage
          data={data}
          requestMoreData={requestMoreData}
          switchViewMode={switchViewMode}
        />
      ) : (
        <DetailPage data={detail} />
      )}
    </>
  );
}

export default App;
"use client";

import { useEffect, useState } from "react";

const ApiData = () => {
  const [loading, setDataLoading] = useState(false);

  const fetchDataFromApi = async () => {
    try {
      setDataLoading(true);
      const response = await fetch(process.env.URL + "/api", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });

      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDataLoading(false);
    }
  };

  // useEffect 會在 client-side render 後執行
  useEffect(() => {
    fetchDataFromApi();
  }, []); // 使用空的 dependency array 來確保只執行一次

  return (
    <div>
      <button onClick={() => fetchDataFromApi()}>
        {loading ? "正在讀取" : "呼叫api"}
      </button>
    </div>
  );
};

export default ApiData;


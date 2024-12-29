import axios from "axios";
import { useState, useEffect } from "react";

const Handing = (url) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get(url);
        console.log("ress--097=>", res.data.articles);
        setNews(res.data.articles);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("Error fetching news:", error.message);
      }
    })();
  }, [url]);

return{loading, error, news};
};
export default Handing;

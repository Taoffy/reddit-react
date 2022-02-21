import { useEffect, useState, useContext } from "react";
import axios from "axios";
import tokenContext from "../shared/context/tokenContext";
import { IPostsContextData } from "../shared/context/postsContext";


function usePostsData() {

    const [data, setData] = useState<IPostsContextData[]>([]);

    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?', {
            headers: { Authorization: `bearer ${token}` },
        })
          .then(({ data }) => {

              const postsData = data.data.children;

              setData(postsData);
          })
          .catch(console.log)
    }, []);

    return [data];
}

export default usePostsData;
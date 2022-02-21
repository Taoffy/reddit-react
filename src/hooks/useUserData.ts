import { useState, useEffect, useContext } from "react";
import axios from "axios";
import tokenContext from "../shared/context/tokenContext";
import { IUserContextData } from "../shared/context/userContext";


function useUserData() {
    const [data, setData] = useState<IUserContextData>({});
    
    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: `bearer ${token}` }
        })
          .then((res) => {
              const userData = res.data;
              setData({ name: userData.name, iconImg: userData.icon_img });
          })
          .catch(console.log);
    }, [token]);

    return [data];
}

export default useUserData;
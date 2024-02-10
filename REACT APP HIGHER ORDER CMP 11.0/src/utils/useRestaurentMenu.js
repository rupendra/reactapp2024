import {
    useEffect,
    useState
} from "react";
import {
    MENU_API_URL
} from '../utils/constants';
export const useRestaurentMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}
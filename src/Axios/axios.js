import { useState, useEffect } from "react"

const baseURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${search}&maxResults=1&key=AIzaSyAnu7Cu2x6E1HbI-sNDkbLrtbbn-oWAJhI`

export default function useParentFetch(search) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            setLoading(true)

            if (search.length === 0) {
                setLoading(false);
                return;
            }
            setData(null);
            setError(null);
            try {
                const response = await fetch(baseURL + search);
                const json = await response.json();
                const channels = json.data.map((val) => ({
                    id: val.id,
                    title: val.snippet.title,
                    descr: val.snippet.description
                }));
                setData(channels);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadData;
    }, [search]);

    return { data, error, loading };
}

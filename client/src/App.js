import './App.styles';
import {useEffect, useState} from "react";
import DownloadMenu from "./components/downloadMenu/DownloadMenu.component";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, [])

    return (
        <div>
                <div>
                    {!data ? "Loading..." : <DownloadMenu/>
                    }
                </div>
        </div>
    );
}

export default App;

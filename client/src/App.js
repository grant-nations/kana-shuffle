import './App.styles';
import {useEffect, useState} from "react";
import DownloadMenu from "./components/downloadMenu/DownloadMenu.component";

function App() {

    return (
        <div>
            <div>
                <DownloadMenu/>
            </div>
        </div>
    );
}

export default App;

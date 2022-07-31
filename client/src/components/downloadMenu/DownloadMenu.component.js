import DownloadButton from "../downloadButton/DownloadButton.component";
import {Menu, DownloadIcon} from "./DownloadMenu.styles";
import {faDownload} from "@fortawesome/free-solid-svg-icons";


const DownloadMenu = () => {
    return <Menu>
        <DownloadButton>
            Hiragana
            <DownloadIcon icon={faDownload}/>
        </DownloadButton>
        <DownloadButton>
            Katakana
            <DownloadIcon icon={faDownload}/></DownloadButton>
        <DownloadButton>
            Romaji
            <DownloadIcon icon={faDownload}/></DownloadButton>
    </Menu>
}


export default DownloadMenu;

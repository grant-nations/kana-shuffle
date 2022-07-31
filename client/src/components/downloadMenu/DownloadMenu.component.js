import DownloadButton from "../downloadButton/DownloadButton.component";
import {Menu} from "./DownloadMenu.styles";


const DownloadMenu = () => {
 return <Menu>
     <DownloadButton>Hiragana</DownloadButton>
     <DownloadButton>Katakana</DownloadButton>
     <DownloadButton>Romaji</DownloadButton>
 </Menu>
}


export default DownloadMenu;

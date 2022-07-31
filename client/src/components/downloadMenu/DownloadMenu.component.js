import DownloadButton from "../downloadButton/DownloadButton.component";
import {Menu, DownloadIcon} from "./DownloadMenu.styles";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const fetchDownload = (endpoint) => {
    fetch(`/${endpoint}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `${endpoint}-shuffle.pdf`,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        })
}

const DownloadMenu = () => {
    return <Menu>
        <DownloadButton onClick={() => {
            fetchDownload("hiragana");
        }}>
            Hiragana
            <DownloadIcon icon={faDownload}/>
        </DownloadButton>
        <DownloadButton onClick={() => fetchDownload("katakana")}>
            Katakana
            <DownloadIcon icon={faDownload}/></DownloadButton>
        <DownloadButton onClick={() => fetchDownload("romaji")}>
            Romaji
            <DownloadIcon icon={faDownload}/></DownloadButton>
    </Menu>
}


export default DownloadMenu;

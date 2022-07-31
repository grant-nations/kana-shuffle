import DownloadButton from "../downloadButton/DownloadButton.component";
import {Menu, DownloadIcon} from "./DownloadMenu.styles";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

// const fetchPdfDownload = (filename) => {
//     // set file URL
//     const url = `/${filename}`;
//
//     // create XMLHTTP request
//     let req = new XMLHttpRequest();
//
//     req.open("GET", url, true);
//     req.responseType = "blob";
//
//     req.onload = () => {
//         // convert the byte data to BLOB data
//         let blob = new Blob([req.response], {type: "application/octetstream"});
//
//         //Check the Browser type and download the File.
//         let isIE = false || !!document.documentMode;
//         if (isIE) {
//             window.navigator.msSaveBlob(blob, filename);
//         } else {
//             let url = window.URL || window.webkitURL;
//             let link = url.createObjectURL(blob);
//             let a = document.createElement("a");
//             a.setAttribute("download", `${filename}.pdf`);
//             a.setAttribute("href", link);
//             document.body.appendChild(a);
//             document.body.removeChild(a);
//         }
//     }
//     req.send();
// }

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
                `${endpoint}.pdf`,
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

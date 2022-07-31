import {BaseDownloadButton} from "./DownloadButton.styles";

const DownloadButton = ({children, ...props}) => {
    return <BaseDownloadButton {...props} >{children}</BaseDownloadButton>
}

export default DownloadButton;

import DownloadMenu from "./components/downloadMenu/DownloadMenu.component";
import WelcomeMenu from "./components/welcomeMenu/WelcomeMenu.component";
import {AppWrapper} from "./App.styles";

function App() {

    return (
        <AppWrapper>
            <div>
                <WelcomeMenu/>
                <DownloadMenu/>
            </div>
        </AppWrapper>
    );
}

export default App;

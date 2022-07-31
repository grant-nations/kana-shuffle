import {WelcomeHeader, WelcomeDiv, WelcomeP, WelcomeJapaneseSpan, WelcomeSpan} from "./WelcomeMenu.styles";

const WelcomeMenu = () => {
    return (
        <WelcomeDiv>
            <WelcomeHeader>
                <WelcomeSpan>Kana Shuffle</WelcomeSpan><WelcomeJapaneseSpan>ヘようこそ!</WelcomeJapaneseSpan>
            </WelcomeHeader>
            <WelcomeP>Download printable hiragana, katakana, and romaji practice sheets whose characters are in a different order
                each time. </WelcomeP>
        </WelcomeDiv>)
}

export default WelcomeMenu;

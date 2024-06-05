import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="src/assets/images/BrainFlix-logo.svg" alt="BrainFlix Logo" />
            <div className="header__content">
                    <input className="header__search-bar" type="text" placeholder="Search"/>
                    <img className="header__profile-pic" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan" />
             
                <button className="header__button--upload" type="submit">Upload</button>
            </div>
        </header>
    )
}

export default Header;

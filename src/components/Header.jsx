function Header() {

    return (
      <>
        <header className="header">
            <img src="./../assets/images/BrainFlix-logo.svg" alt="BrainFlix Logo" />
            <div className="header__search-bar-wrapper">
                <input type="text" name="" id="" placeholder="Search"/>
                <div className="header__avatar"></div>
                <button type="submit">Upload</button>
            </div>

        </header>
  
  
      </>
    )
  }

export default Header
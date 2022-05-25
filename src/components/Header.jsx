// components/Header.jsx

export default function Header() {
    return (
      <header>
        <div className="header__container">
          <div className="container">
            <img className="logo" src={require("./images/ai_font_06.png")} />          
            <div className="title">AI 금융상담시스템 관리자 화면</div>
          </div>

          <div className="subtitle">
            Check out what other designers have created using ProtoPie—download
            these examples to learn exactly how they made their interactions.
          </div>
          <div className="btn__area">
            <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
              <button>Try ProtoPie Yourself</button>
            </a>
          </div>
        </div>
      </header>
    );
  }
  
  
// components/Header.jsx

export default function Header() {
    return (
      <header>
        <div className="header__container">
          {/* <div className="container"> */}
            <img className="logo" src={require("./images/ai_font_06.png")} />          
            <div className="title">AI 금융상담시스템 관리자 화면</div>
          {/* </div> */}
        </div>
      </header>
    );
  }
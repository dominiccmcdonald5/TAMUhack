import React from "react";

interface TitleProps {
  title: string;
  logoSrc: string;
}

const Title: React.FC<TitleProps> = ({ title, logoSrc }) => {
  return (
    <header className="bg-light py-1 border-bottom">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          fontFamily: "'Avenir', 'Helvetica Neue', Arial, sans-serif",
          padding: "30px",
        }}
      >
        {/* Left Logo */}
        <img
          src={logoSrc}
          alt="Logo"
          className="logo"
          style={{
            width: "60px",
            height: "auto",
            marginRight: "10px",
            flexShrink: 0, // Prevent the logo from shrinking
          }}
        />
        
        {/* Title */}
        <h1
          className="text-center text-dark m-0"
          style={{
            border: "2px solid #FF0000",
            flexGrow: 1, // Allow title to take up available space and be centered
            textAlign: "center", // Center the title text
          }}
        >
          {title}
        </h1>
        
        {/* Right Logo */}
        <img
          src={logoSrc}
          alt="Logo"
          className="logo"
          style={{
            width: "60px",
            height: "auto",
            marginLeft: "10px",
            flexShrink: 0, // Prevent the logo from shrinking
          }}
        />
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return <Title title="Toyotabase" logoSrc="https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png" />;
};

export default App;

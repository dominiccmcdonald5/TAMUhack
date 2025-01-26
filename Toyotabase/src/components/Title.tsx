import React from "react";

interface TitleProps {
  title: string;
  logoSrc: string;
}

const Title: React.FC<TitleProps> = ({ title, logoSrc }) => {
  return (
    <header className="bg-light py-1 border-bottom">
      <h1 className="d-flex align-items-center text-center text-dark" 
          style={{
            fontFamily: "'Avenir', 'Helvetica Neue', Arial, sans-serif", // Apply the Google Font  
            border: "3px solid #FF0000", // Red border
            padding: "30px", // Optional: add space inside the border
          }}
      >
        <img 
          src="https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png" 
          alt="Logo" 
          className="logo" 
          style={{ width: '60px', height: 'auto', marginRight: '10px' }} 
        />
        {title}
      </h1>
    </header>
  );
};

const App: React.FC = () => {
  return <Title title="Toyotabase" logoSrc="C:\Users\llesl\OneDrive\Pictures\toyota.png" />;
};

export default App;

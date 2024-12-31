import { useState, useEffect } from "react";

function Header() {
  const [name, setName] = useState([]);
  const [lock, setLock] = useState(true);
  const displayName = () => {
    const name = [
      "H",
      "i",
      ",",
      " I'",
      "m ",
      "",
      "T",
      "r",
      "i",
      "s",
      "t",
      "a",
      "n",
      " W",
      "a",
      "s",
      "s",
      "i",
      "l",
      "y",
      "n",
      ".",
    ];
    name.forEach((character, index) => {
      setTimeout(() => {
        setName((prevName) => [...prevName, character]);
      }, index * 150);
    });
  };

  useEffect(() => {
    displayName();
  }, []);

  return (
    <>
      <button onClick={(e) => setLock(false)} id="contact">
        Contact
      </button>
      <header id="header">
        <h1 id="name">{name}</h1>
        <h3 className="fade-in" id="portfolio-title">
          Full Stack Javascript Developer.
        </h3>
      </header>
      {!lock && (
        <>
          <div id="contact-info">
            <p id="phone">{number}</p>
            <p>{email}</p>
          </div>
        </>
      )}
    </>
  );
}

export default Header;

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
    <div id="favicons">
    <a href="https://github.com/wasgt71"><img src="github.png" className="favicon"></img></a>
    <a href="mailto:wasgt21@gmail.com"><img src="email.png" id="email-favicon"></img></a>
    <a href="tel:+3215270367"><img src="phone.png" className="favicon"></img></a>
    </div>

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

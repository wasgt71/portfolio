import { useState, useEffect } from "react";

function Contact() {
  const [number, setNumber] = useState([]);

  const displayPhone = () => {
    const phone = [3, 2, 1, 5, 2, 7, 0, 3, 6, 7];

    phone.forEach((numbers, index) => {
        setTimeout(() => {
     setNumber((prevNumber) => [...prevNumber, numbers]);
        }, index * 500)
    });

    console.log(number);
  };

  useEffect(() => {
   displayPhone();
  }, []);

  return (
    <>
      <p>{number}</p>
    </>
  );
}

export default Contact;

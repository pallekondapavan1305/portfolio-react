import React from "react";
import "./contact.css";
import { motion } from "framer-motion"

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dce6d4ba-bae5-4d88-a6b2-2684a1ba7e77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact_container">
      <form className="left_container" onSubmit={onSubmit}>
        <div className="contact_title">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}>Contact Us</motion.h2>
          <hr />
        </div>
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className='contact_input' type="text" name="name" placeholder="enter your name" id="" />
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} className='contact_input' type="email" name="email" placeholder="enter your email" id="" />
        <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className='message' name="message" placeholder="enter your message" id=""></motion.textarea>
        <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} type="submit">Submit</motion.button>
      </form>
      <span>{result}</span>

    </div>
  );
}
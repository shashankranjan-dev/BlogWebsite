import React from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function ContactPage() {
  return (
    <div>
      <Contact />
      <div className="-mt-32">
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;

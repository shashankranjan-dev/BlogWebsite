import React from "react";
import Topic from "../../components/Topic/Topic";
import Footer from "../../components/Footer/Footer";

function TopicPage() {
  return (
    <div>
      <Topic />
      <div className="-mt-28">
        <Footer />
      </div>
    </div>
  );
}

export default TopicPage;

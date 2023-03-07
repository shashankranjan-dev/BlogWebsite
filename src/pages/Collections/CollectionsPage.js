import React from "react";
import Collections from "../../components/Collections/Collections";
// import { useParams } from "react-router-dom";
// import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";

function CollectionsPage() {
  //   const { uid } = useParams();

  //   const [document] = usePrismicDocumentByUID("cricket", "cricket");
  return (
    <div>
      <Collections />
      {/* {document && (
        <>
          {" "}
          <PrismicRichText field={document.data.title} />
          <div className="text-red-500">
            <PrismicRichText field={document.data.body} />
          </div>
          <img src={document.data.hero.url} alt={document.data.hero.alt} />
        </>
      )} */}
    </div>
  );
}

export default CollectionsPage;

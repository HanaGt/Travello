import React from "react";
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";


const FooterBottom = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <FooterSocial />
        <FooterCopyright />
        
      </div>
    </section>
  );
};

export default FooterBottom;

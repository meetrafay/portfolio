import React from "react";
// import "../Styles/Certificateitems.css";
import { CertificateList } from "../helpers/CertificateList";

import GoogleIcon from "@mui/icons-material/Google";

function CertificateItems() {
  return (
    <>
      {CertificateList.map((certificate, name, lnik) => {
        return (
          <div className="box1">
            <h3>{certificate.name}</h3>
            <div className="log">
              <GoogleIcon />
            </div>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to see the certificate
            </a>
          </div>
        );
      })}
    </>
  );
}

export default CertificateItems;

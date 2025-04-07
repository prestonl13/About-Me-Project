import React from 'react';
import './Resume.css';

export function Resume() {
  return (
    <div>
      <div className="container center blue">
        <h1>Curriculum Vitae</h1>
      </div>
      <div id="projects" className="container" >
        <object style={{width:"100%", height:"800px"}}data="RenneCastro_CV_2024.pdf" type="application/pdf">
          <param name="fallback" value="This browser doesn't support embedded PDFs. <a href='your_pdf_url.pdf'>Download the PDF here.</a>" />
        </object>
      </div>
    </div>
  );
}


import React from 'react';

function Videos() {
  return (
    <div>
      <h1>Videos</h1>
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://youtube.com/shorts/WgPDuglB--U?si=nCTQ725vX3gX439h"
          title="YouTube video"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://youtube.com/shorts/WgPDuglB--U?si=PaCrHZF5wdlpKIrs"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ScreenShotController, ScreenShot } from 'react-component-screenshot';

const Certificate = () => {


    const controller = new ScreenShotController();
    const takeCapture = () => {
        // Capture and save the screenshot
        controller.captureAndSave({
          name: 'my-awesome-component',
          extension: 'jpg',
          type: 'image/jpeg',
          quality: 1
        });
      };
    


  return (
    <div>
      <br />
      <div
        style={{
          width: "98%",
          display: "flex",
          justifyContent: "flex-end",
        }}

        onClick={takeCapture}
      >
        <a
          className="inline-flex items-center gap-2 text-[#4299e1] hover:text-[#2b6cb0] bg-white px-3 py-2 rounded-md shadow-md hover:shadow-lg"
          href="#"
        >
          <FontAwesomeIcon
            icon={faDownload}
            className="text-[#4299e1] text-lg"
          />
          Download Certificate
        </a>
      </div>
      <br />{" "}

      <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto p-8 bg-gradient-to-r from-[#f0f8ff] to-[#e6f0ff] rounded-xl border border-[#d0e0f0]">
       
      <ScreenShot controller={controller}>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#4299e1] w-full">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-4xl font-serif font-bold text-[#4299e1] underline">
              Certificate of Completion
            </h1>
            <p className="text-xl font-serif text-[#4299e1] underline">
              Web Development Fundamentals
            </p>
            <p className="text-lg font-serif text-[#4299e1] underline">
              Awarded to
            </p>
            <h2 className="text-3xl font-serif font-bold text-[#4299e1]">
              John Doe
            </h2>
            <p className="text-lg font-serif text-[#4299e1]">
              For successfully completing the Web Development Fundamentals
              course from January 1, 2023 to March 31, 2023 at Acme University.
            </p>
            <p className="text-lg font-serif text-[#4299e1]">
              This course provided a comprehensive introduction to web
              development, covering HTML, CSS, JavaScript, and modern web
            </p>
            <div className="flex flex-col items-start justify-between w-full space-y-4">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-serif text-[#4299e1] underline">
                  Instructor: Jane Smith
                </p>
                <p className="text-lg font-serif text-[#4299e1] underline">
                  Issued on: June 28, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScreenShot>
      </div>

    </div>
  );
};

export default Certificate;

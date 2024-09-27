import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import {
  data,
  CODE_SNIPPETS,
  LANGUAGE_VERSIONS,
} from "../../../utils/data/codeEditor.js";
import { tors } from "../../../api/Tors.js";


function CodeEditor() {
  const [analyzeDisplay, setAnalyzeDisplay] = useState(false);
  const [pythonCode, setPythonCode] = useState(CODE_SNIPPETS["python"]);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("python");
  const [snippit, setSnippit] = useState(CODE_SNIPPETS["python"]);
  const [version, setVersion] = useState("3.10.0");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const [analyzeAnswer, setAnalyzeAnswer] = useState(null);

  const handleSelection = (lang, versio) => {
    setLanguage(lang);
    setVersion(versio);
    const selectedSnippit = CODE_SNIPPETS[lang];
    setSnippit(selectedSnippit);
    setPythonCode(selectedSnippit);
  };

  const executeCode = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          version: LANGUAGE_VERSIONS[language],
          files: [
            {
              content: pythonCode,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to execute code.");
      }

      const data = await response.json();
      setOutput(data.run.output);
      setIsLoading(false);
    } catch (error) {
      setError("An error occurred while compiling and running the Python code.");
      setIsLoading(false);
      console.error("Error:", error);
    }
  };

  const submitAndAnalyze = async () => {
    setAnalyzeDisplay(true);
    setAnalyzeAnswer(null);
    const response = await fetch(`${tors}/api/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: pythonCode,
      }),
    });

    const data = await response.json();
    setAnalyzeAnswer(data.result.chatStreamEndEvent.response.text);

    console.log(data.result.chatStreamEndEvent.response.text)
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen text-gray-200 p-4">
      <div className="flex flex-col lg:flex-row justify-evenly mb-8 space-y-4 lg:space-y-0">
        <div className="flex justify-center">
          <div className="relative w-full lg:w-64">
            <select
              className="block w-full py-3 pl-4 pr-10 leading-tight bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:bg-gray-700 focus:border-gray-500 transition duration-300 ease-in-out"
              value={language}
              onChange={(e) => handleSelection(e.target.value, version)}
            >
              {data.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12l-4-4h8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap">
        <div className="w-full lg:w-1/2 p-2">
          <div className="editor-container">
            <Editor
              options={{
                minimap: { enabled: false },
                scrollbar: {
                  verticalScrollbarSize: 2,
                  horizontalScrollbarSize: 2,
                  verticalSliderSize: 1,
                  horizontalSliderSize: 2,
                  alwaysConsumeMouseWheel: false,
                },
                lineNumbers: 'off', // Disable line numbers
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={snippit}
              value={pythonCode}
              onChange={setPythonCode}
              style={{ borderRadius: "1rem" }}
            />
          </div>
          <div className="flex justify-center mt-4">
            {isLoading ? (
              <button
                className="py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded text-white font-bold shadow-lg cursor-not-allowed"
                disabled
              >
                Compiling
              </button>
            ) : (
              <button
                onClick={executeCode}
                className="py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded text-white font-bold shadow-lg"
              >
                Execute
              </button>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-2">
          <div
            ref={bottomRef}
            className="bg-gray-800 border border-gray-700 rounded p-4 min-h-[75vh] overflow-y-auto"
          >
            {error && <div className="text-red-500">{error}</div>}
            {output && <div className="whitespace-pre-wrap">{output}</div>}
          </div>
          <div className="flex justify-center mt-4">
            {output.length > 0 && (
              <button
                onClick={() => {
                  submitAndAnalyze();
                  bottomRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded text-white font-bold shadow-lg"
              >
                Analyze Time complexity
              </button>
            )}
          </div>
        </div>
      </div>

      {analyzeDisplay && (
        <div className="flex justify-center mt-8">
          <div className="w-full lg:w-4/5 bg-gray-800 rounded p-4 shadow-lg">
            {analyzeAnswer ? (
              <div className="text-gray-200">{analyzeAnswer}</div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
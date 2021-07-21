// eslint-disable-next-line no-use-before-define
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [svgCode, setSvgCode] = React.useState(null);
  const [text, setText] = React.useState("Let's start by searching abstract");
  const inputRef = React.useRef<HTMLInputElement>();
  const submitRef = React.useRef<HTMLButtonElement>();
  window.onmessage = async (event: any): Promise<void> => {
    if (event.data.pluginMessage.type === "get-svg") {
      const request = new XMLHttpRequest();
      const url = `https://cdn.jsdelivr.net/npm/eos-icons@latest/svg/${event.data.pluginMessage.searchText}.svg`;
      request.open("GET", url);
      setText("Searching....");
      request.responseType = "document";
      request.onload = () => {
        setLoading(false);
        if (request.response === null) {
          setText("No svg found");
          return;
        }
        setText("Found your svg :)");
        const svg = new XMLSerializer().serializeToString(request.response);
        setSvgCode(svg);
      };
      request.onerror = () => {
        setLoading(false);
      };
      request.send();
    }
  };
  const useSvg = (): void => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "handle-icon",
          svg: svgCode,
        },
      },
      "*"
    );
  };
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setLoading(true);
    const searchText = inputRef.current.value;
    parent.postMessage(
      { pluginMessage: { type: "search-icons", searchText } },
      "*"
    );
  };
  return (
    <div className="container">
      <p className="title">EOS-icons</p>
      <p>{text}</p>
      <div className="flex-container">
        <input
          className="search"
          placeholder="Search for an icon"
          ref={inputRef}
        />
        <button
          className="submit"
          type="button"
          ref={submitRef}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Search
        </button>
        <button
          type="button"
          className="submit"
          onClick={() => {
            useSvg();
          }}
        >
          Use it!
        </button>
      </div>
      {svgCode && (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: svgCode.replace("<svg", "<svg width='50' height='50'"),
          }}
        />
      )}
      <p className="loading" style={{ display: loading ? "initial" : "none" }}>
        Loading...
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("eos"));

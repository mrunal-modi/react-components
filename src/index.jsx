import ReactDOM from "react-dom/client";
import WebGPT from "./WebGPT";

export default WebGPT;

if(process.env.NODE_ENV === "development") {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<WebGPT />);
}
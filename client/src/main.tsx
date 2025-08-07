import { createRoot } from "react-dom/client";
import App from "./App";
import TestComponent from "./test-component";
import "./index.css";

console.log('main.tsx is running');
console.log('root element:', document.getElementById("root"));

createRoot(document.getElementById("root")!).render(<TestComponent />);

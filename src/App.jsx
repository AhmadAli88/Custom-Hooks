import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForm from "./components/Form";
import DataDisplay from "./components/Fetch";
import DebounceExample from "./components/Debounce";
import LocalStorageComponent from "./components/LocalStorage";
import InfiniteScrollComponent from "./components/InfiniteScroll";
import MediaQueryComponent from "./components/MediaQuery";
import ClickOutsideComponent from "./components/ClickOutside";
import KeyPressComponent from "./components/Keypress";
import WindowSizeComponent from "./components/WindowResize";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyForm />
      {/* <DataDisplay /> */}
      {/* <LocalStorageComponent /> */}
      {/* <DebounceExample /> */}
      {/* <InfiniteScrollComponent/> */}
      {/* <MediaQueryComponent/> */}
      {/* <ClickOutsideComponent/> */}
      {/* <WindowSizeComponent/> */}
      {/* <KeyPressComponent/> */}
    </>
  );
}

export default App;

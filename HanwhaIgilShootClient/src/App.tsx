import AppRouter from "./components/AppRouter";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;

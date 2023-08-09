import BannerComponent from "./components/banner/bannerComponent";
import bannerData from "./components/banner/bannerData";
import Section from "./components/section/section";
import ToggleTheme from "./components/toggleTheme/toggle";
import "../src/toggle.css";
function App() {
  return (
    <>
      <BannerComponent banners={bannerData} />
      <ToggleTheme />
      <Section />
    </>
  );
}

export default App;

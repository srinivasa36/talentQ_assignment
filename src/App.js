import BannerComponent from "./components/banner/bannerComponent";
import bannerData from "./components/banner/bannerData";
import Section from "./components/section/section";
function App() {
  return (
    <div>
      <BannerComponent banners={bannerData} />
      <Section />
    </div>
  );
}

export default App;

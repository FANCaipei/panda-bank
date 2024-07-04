import ContentPage from "../contentPage";
import HomeHeader from "./components/homeHeader";
import NavFooter from "../../components/navFooter";
import HomeContent from "./components/homeContent";

const HomePage = () => {
  return (
    <ContentPage
      header={<HomeHeader />}
      footer={<NavFooter />}
      content={<HomeContent />}
    />
  );
};

export default HomePage;

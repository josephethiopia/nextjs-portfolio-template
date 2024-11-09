import HomeComponent from "./portfolio_Components/Home";
import AboutMeComponent from "./portfolio_Components/AboutMe";
import SkillsComponent from "./portfolio_Components/Skills";
import WorkComponent from "./portfolio_Components/Work";
import ContactComponent from "./portfolio_Components/Contact";
export default function Home() {
  return (
    <div>
      <HomeComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <WorkComponent />
      <ContactComponent />
    </div>
  );
}

import DesignBox from "@components/BoxIllustration/DesignBox";
import DesignUxBox from "@components/BoxIllustration/DesignUxBox";
import IllustrationBox from "@components/BoxIllustration/illustrationBox";
import Diagramme from "@components/Diagramme/Diagramme";
import Meeting from "@components/Meeting/Meeting";
import Schedule from "@components/Schedule/Schedule";
import SearchBar from "@components/SearchBar/Search";
import SideBar from "@components/SideBar/SideBar";
import UserProfile from "@components/UserProfile/UserProfile";
import Files from "@components/Files/Files";
import Files2 from "@components/Files/Files2";
import Files3 from "@components/Files/Files3";

export default function Home() {
  return (
    <div>
      <SideBar />
      <Schedule />
      <SearchBar />
      <Meeting />
      <UserProfile />
      <IllustrationBox />
      <DesignUxBox />
      <DesignBox />
      <Diagramme />
      <Files />
      <Files2 />
      <Files3 />
    </div>
  );
}

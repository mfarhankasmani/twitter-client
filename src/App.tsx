import React from "react";
import "./App.css";
import { Sidebar, Feed, Widgets } from "./components";
// Mock data to test UI without BFF
import response from "./mocks/response.json";
export interface IProfile {
  profile_image_url: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  active?: boolean;
  index?: number;
  selectProfile?: (profile: IProfile) => void;
}

function App() {
  const [profiles, setProfile] = React.useState<IProfile[]>([]);
  const [selectedProfile, setSelectedProfile] = React.useState<IProfile>();

  const selectProfile = (profile: IProfile) => {
    setSelectedProfile(profile);
    console.log(selectedProfile);
  };

  const reqProfileValues = (response: IProfile[]) =>
    response.map(
      ({ profile_image_url, name, screen_name, location, description }) => {
        return {
          profile_image_url,
          name,
          screen_name,
          location,
          description,
          selectProfile,
        };
      }
    );

  const handleSearch = async (
    event: React.MouseEvent<HTMLElement>,
    inputValue: string = "australia"
  ) => {
    event.preventDefault();
    let data;
    try {
      const response = await fetch(`http://localhost:8080/${inputValue}`, {
        method: "GET",
      });
      const responseJSON = await response.json();
      data = responseJSON.data;
    } catch (err) {
      // Use mock data if BFF fails
      data = response;
    }
    const searchedProfiles = reqProfileValues(data);
    setProfile([...searchedProfiles]);
  };

  return (
    <div className="app">
      <Sidebar />
      <Feed profile={selectedProfile} />
      <Widgets onSubmit={handleSearch} profiles={profiles} />
    </div>
  );
}

export default App;

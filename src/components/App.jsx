import user from "./user/user.json";
import { Profile } from "./user/Profile.jsx";
export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
       />
    </div>
  );
};

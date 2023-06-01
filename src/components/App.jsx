import user from "./user/user.json";
import data from "./statistic/statistics.json";
import { Profile } from "./user/Profile.jsx";
import { Statistics } from './statistic/Staistics.jsx';

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
      <Statistics title="Upload stats" stats={data} /> 
    </div>
  );
};

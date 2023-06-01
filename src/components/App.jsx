import user from "./user/user.json";
import data from "./statistic/statistics.json";
import friends from "./friends/friends.json";
import { Profile } from "./user/Profile.jsx";
import { Statistics } from './statistic/Staistics.jsx';
import { FriendList } from './friends/FriendList.jsx';

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

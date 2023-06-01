import friends from "./friends/friends.json";
import { FriendList } from './friends/FriendList.jsx';

export const App = () => {
  return (
    <div
      
    >
      React homework template
      <FriendList friends={friends} />
    </div>
  );
};

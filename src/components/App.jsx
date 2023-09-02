import { Profile } from "components/Profile/Profile";
import user from 'components/Data/user.json'
import data from 'components/Data/data.json'
import friends from 'components/Data/friends.json'
import { Statistics } from "./Statistics/Statistics";
import { StatisticsSection } from "./StatisticsSection/StatisticsSection";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return <>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<StatisticsSection title="Upload stats">
  <Statistics stats={data} />
  </StatisticsSection>
<FriendList friends={friends} />
 </>;
};


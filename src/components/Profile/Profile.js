import PropTypes from 'prop-types';

import { UserName, UserDescription, StatsList, StatsItem, UserInfo, StatsNumbers } from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return ( <UserDescription>
  <div>
    <img
      src={avatar}
        alt={`${username} avatar`}
      width={60}/>
    <UserName >{username}</UserName>
    <UserInfo >{`@${tag}`}</UserInfo>
    <UserInfo >{location}</UserInfo>
  </div>

  <StatsList>
    <StatsItem>
      <UserInfo >Followers</UserInfo>
      <StatsNumbers>{followers}</StatsNumbers>
    </StatsItem>
    <StatsItem>
      <UserInfo>Views</UserInfo>
      <StatsNumbers >{views}</StatsNumbers>
    </StatsItem>
    <StatsItem>
      <UserInfo>Likes</UserInfo>
      <StatsNumbers >{likes}</StatsNumbers>
    </StatsItem>
  </StatsList>
</UserDescription>)
}



Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }),
}
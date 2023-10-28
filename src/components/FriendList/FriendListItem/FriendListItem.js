import PropTypes from 'prop-types';
import { ListItem , UserName, OnlineStatus} from './FriendListItem.styled';


export const FriendListItem = ({isOnline, avatar, name }) => {
    return (
            <ListItem >
                <OnlineStatus $isOnline={isOnline}></OnlineStatus>
                <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
                <UserName>{name}</UserName>
        </ListItem>)
}
        
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
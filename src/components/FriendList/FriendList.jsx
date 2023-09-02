import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import css from 'components/FriendList/FriendList.module.css'
export function FriendList({ friends }) {
        return <ul className={css['friend-list']}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} key={id} />
        })}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }))
}
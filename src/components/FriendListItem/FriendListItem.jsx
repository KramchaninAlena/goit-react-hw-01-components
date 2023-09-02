import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css'
export function FriendListItem({ avatar, name, isOnline, id }) {
    return <li key={id} className={css.item} >
        <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}
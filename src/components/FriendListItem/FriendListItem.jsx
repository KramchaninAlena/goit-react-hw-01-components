import css from 'components/FriendListItem/FriendListItem.module.css'
export function FriendListItem({ avatar, name, isOnline, id }) {
    return <li key={id} className={css.item} >
        <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
</li>
}
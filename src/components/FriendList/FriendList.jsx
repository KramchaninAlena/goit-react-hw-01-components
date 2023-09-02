import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import css from 'components/FriendList/FriendList.module.css'
export function FriendList({ friends }) {
        return <ul className={css['friend-list']}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} key={id} />
        })}
    </ul>
}
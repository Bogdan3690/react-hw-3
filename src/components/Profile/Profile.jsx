import css from "./Profile.module.css"

const Profile = ( {user} ) => {
    return(
        <div className={css.profile}>
  <div>
    <img
    width={150}
      src={user.avatar}
      alt={user.username}
    />
    <p className={css.username}>{user.username}</p>
    <p className={css.tag}>{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile
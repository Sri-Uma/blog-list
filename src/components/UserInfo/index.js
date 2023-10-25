import './index.css'

const UserInfo = props => {
  const {user} = props
  const {name, profileImg, altImg, designation} = user

  return (
    <div className="ui-container">
      <img className="profile-img" alt={altImg} src={profileImg} />
      <h1 className="name">{name}</h1>
      <p className="designation">{designation}</p>
    </div>
  )
}
export default UserInfo

import { Link } from "react-router-dom"

const Card = (props) => {
  return (
    <div className="max-w-[24rem] bg-white dark:bg-card-dark px-5 py-6 rounded-[10px] m-4">
      <Link to={`/advocate/${props.username}`}>
        <div className="flex gap-6 items-center mb-4">
          <img
            src={props.profile_pic}
            alt="Profile Picture"
            className="w-14 h-14 border border-accent rounded-full "
          />
          <div className="overflow-hidden break-words">
            <h3 className="font-medium dark:text-white ">{props.name}</h3>
            <span className="text-black/50 dark:text-white/50 text-sm">
              @{props.username}
            </span>
          </div>
        </div>
      </Link>

      <p className="text-sm dark:text-white">{props.bio}</p>
    </div>
  )
}

export default Card

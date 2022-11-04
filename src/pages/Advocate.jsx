import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { getAdvocate } from "../services/axios"
import { Timeline } from "react-twitter-widgets"
import { useNavigate } from "react-router-dom"

const Advocate = () => {
  const [advocate, setAdvocate] = useState()

  let { username } = useParams()

  const navigate = useNavigate()
  const fetchAdvocate = async (username) => {
    try{
    const { data } = await getAdvocate(username)
    setAdvocate(data.advocate)
    }
    catch(error){
      console.log(error)
      if(error.code == "ERR_BAD_RESPONSE"){
        navigate("*")
      }
    }
  }

  useEffect(() => {
    fetchAdvocate(username)
    window.scrollTo(0, 0)
  }, [username])
  return !advocate ? (
    <Loading />
  ) : (
    <>
      <main className="max-w-4xl m-auto mt-8 md:mt-24 px-4 ">
        <div className="flex flex-col text-center gap-5 md:gap-24 items-center md:text-left md:flex-row mb-24">
          <img
            src={advocate.profile_pic}
            alt="profile picture"
            className="border-[3px] border-accent rounded-full w-[200px] h-[200px]"
          />
          <div className="max-w-[31.25rem] ">
            <h1 className="font-medium text-5xldark:text-white mb-2">
              {advocate.name}
            </h1>
            <span className="text-lg text-black/50 dark:text-white/50 mb-5 block">
              @{advocate.username}
            </span>
            <p className="text-lg leading-7 dark:text-white mb-4">
              {advocate.bio}
            </p>
            <div className="flex gap-5 items-center justify-center md:justify-start">
              <a href={`https://twitter.com/${advocate.username}`} target="_blank">
                <button className="bg-accent px-3 py-2 rounded-[10px] text-lg font-medium flex items-center gap-1">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.125 5.4668C17.5273 5.72462 16.877 5.91016 16.207 5.98243C16.9026 5.56922 17.4234 4.91641 17.6719 4.14649C17.0192 4.53475 16.3042 4.80701 15.5586 4.95118C15.247 4.61803 14.8701 4.35262 14.4514 4.17151C14.0327 3.99039 13.5812 3.89744 13.125 3.89845C11.2793 3.89845 9.79492 5.39454 9.79492 7.23048C9.79492 7.48829 9.82617 7.7461 9.87695 7.99415C7.11328 7.84962 4.64844 6.5293 3.00977 4.50782C2.71118 5.01781 2.55471 5.5985 2.55664 6.18946C2.55664 7.34571 3.14453 8.36524 4.04102 8.96485C3.5127 8.94405 2.99676 8.79883 2.53516 8.54102V8.58204C2.53516 10.2012 3.67969 11.543 5.20508 11.8516C4.91867 11.926 4.62404 11.964 4.32812 11.9649C4.11133 11.9649 3.90625 11.9434 3.69922 11.9141C4.12109 13.2344 5.34961 14.1934 6.8125 14.2246C5.66797 15.1211 4.23438 15.6484 2.67773 15.6484C2.39844 15.6484 2.14062 15.6387 1.87305 15.6074C3.34961 16.5547 5.10156 17.1016 6.98828 17.1016C13.1133 17.1016 16.4648 12.0274 16.4648 7.62306C16.4648 7.47852 16.4648 7.33399 16.4551 7.18946C17.1035 6.71485 17.6719 6.12696 18.125 5.4668Z"
                      fill="black"
                    />
                  </svg>
                  <span>Twitter</span>
                </button>
              </a>
              <span className="text-black/50 dark:text-white/50">
                <span className="font-medium text-lg text-black dark:text-white">
                  {advocate.follower_count}{" "}
                </span>
                followers
              </span>
            </div>
          </div>
        </div>
        <div className="h-[600px] bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 rounded-xl">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName:  `${advocate.username}`,
          }}
          options={{
            height: "600",
            theme : "dark"
          }}
        />
        </div>
      </main>
    </>
  )
}

export default Advocate

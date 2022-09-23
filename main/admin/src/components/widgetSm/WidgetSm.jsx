import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from 'react'
import { userRequest } from "../../reqMethods";


export default function WidgetSm() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async (user) => {

      try {
        const res = await userRequest.get("users/?new=true")
        setUser(res.data)
      } catch (error) {
        console.log(error);
      }

    }
    getUsers()

  }, []);



  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {user.map((user) => (

          <li key={user._id} className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>

        ))}

      </ul>
    </div>
  );
}

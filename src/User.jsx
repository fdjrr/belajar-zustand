import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "./stores/app-store";
import { useState } from "react";

export default function User() {
  const { user, getUser, logoutUser } = useAppStore(
    useShallow((state) => ({
      user: state.user,
      getUser: state.getUser,
      logoutUser: state.logoutUser,
    }))
  );

  const [username, setUsername] = useState("");

  return (
    <div>
      <p>Login by Username</p>
      <input
        type="text"
        value={username}
        placeholder="Input your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={() => getUser(username)}>
        Login
      </button>
      {user?.login && (
        <>
          <p>Name : {user.name} </p>
          <p>Bio : {user.bio}</p>
          <p>Location : {user.location}</p>
          <button type="button" onClick={logoutUser}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

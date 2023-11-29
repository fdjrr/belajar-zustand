import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "./stores/app-store";

export default function Username() {
  const { username, updateUsername } = useAppStore(
    useShallow((state) => ({
      username: state.username,
      updateUsername: state.updateUsername,
    }))
  );

  console.log("Render Username!");

  return (
    <div>
      <p>Username : {username}</p>
      <input
        type="text"
        placeholder="New Username"
        onChange={(e) => {
          const newUsername = e.target.value;
          updateUsername(newUsername);
        }}
      ></input>
    </div>
  );
}

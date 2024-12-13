import Permissions from "./components/Permissions";
import { getPermissions } from "./getPermissions";

export default function Home() {
  //testing use hook that takes a promise in Permissions comp

  const permPromise = getPermissions();
  return (
    <div className="m-5">
      <Permissions permPromise={permPromise} />
    </div>
  );
}

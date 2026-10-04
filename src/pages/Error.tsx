import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
export default function Error() {
  const error: any = useRouteError();

  return (
    <div className=" bg-zinc-500/50 py-10 rounded-2xl  w-[600px] mx-auto mt-20  text-center pt-20">
      <h2 className="text-5xl font-bold mb-4">{error.status}</h2>
      <p className="text-3xl mb-4 "> {error.statusText}</p>
      <Link className=" underline text-blue-600" to="/" replace={true}>
        looks like you've reached to non-extetin page
        <br /> How about going back to home
      </Link>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Tprops {
  id: number;
  title: string;
  img: string;
  prefix: string;
}
export default function Categorye({ title, img, prefix }: Tprops) {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" bg-zinc-400/10 p-1 h-40 rounded-sm hover:shadow hover:shadow-taupe-500  duration-300">
        <Link to={`/categoris/${prefix}`} className=" rounded-2xl ">
          <div className="flex justify-between">
            <h2 className=" text-sm ">{t(title)}</h2>
            <img
              className="w-20 object-cover flex mt-15"
              src={img}
              alt={title}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function TechCarButtom() {
  return (
    <div className="my-10 md:my-30">
      <Link className=" px-3 md:px-5 block" to="tech-care">
        <img
          className="  h-50 md:h-auto rounded-sm md:rounded-xl"
          src="https://btech.com/_next/static/media/TECHCARE_AR.0~t5ojb7ka.bm.webp"
          alt="tech-care"
        />
      </Link>
    </div>
  );
}

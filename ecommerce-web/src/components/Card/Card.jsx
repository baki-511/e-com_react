import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section data-aos="fade-up" className="rounded-md border-2 sm:flex-0 basis-56 p-5 flex flex-col">
        <img
          src={img}
          alt={title}
          className="flex-1 object-contain w-full aspect-square"
        />
        <div className=" mt-5">
          <h3 className="font-bold mb-3">{title}</h3>
          <section className="flex [&_svg]:text-yellow-400">
            {star} {star} {star} {star}
            <span className="text-sm ml-auto">{reviews}</span>
          </section>
          <section className="text-slate-600 flex items-center justify-between">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;

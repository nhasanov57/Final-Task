import delivery from "../img/delivery.png";
import background from "../img/rightBg.png";

export default function Main() {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex flex-col items-center md:items-start justify-between gap-6  flex-1">
        <div className="flex items-center gap-2 justify-center bg-red-200 px-4 py-1 rounded-full">
          <p className="text-base text-white font-semibold">Delivery</p>
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold  tracking-wide  text-headingColor ">
          food mood delivery
        </h1>
        <p className=" text-center md:text-left text-base md:text-lg  text-textColor md:w-[85%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus
          voluptatum velit alias dolor? Obcaecati facere magnam totam maiores
          soluta.
        </p>

        <button
          type="button"
          className=" bg-gradient-to-br  from-red-200   to-red-400 w-full  md:w-auto px-4 py-2 rounded-lg text-white hover:shadow-lg  transition-all ease-in-out"
        >
          Order now
        </button>
      </div>
      <div className="py-2 flex-1">
        <img src={background} alt="background" className="w-full   h-96 lg:h-full object-cover " />
 
      </div>
    </section>
  );
}

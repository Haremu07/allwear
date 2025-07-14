import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import man from "../assets/man6.png";
import women from "../assets/woman1.png";
import kid from "../assets/kid1.png";
import { motion } from "framer-motion";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[550px] w-full flex flex-col">
      <div className="flex justify-center items-center w-full h-15 mt-10 ">
        <h1 className="text-3xl text-amber-950">Shop by Categories</h1>
      </div>
      <div className="w-full h-auto flex mt-10 md:mt-0 justify-center gap-7 flex-col md:flex-row items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Cards
            onClick={() => navigate("/category/men")}
            img={man}
            text="Men's Wear"
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Cards
            onClick={() => navigate("/category/women")}
            img={women}
            text="Women's Wear"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Cards
            onClick={() => navigate("/category/kids")}
            img={kid}
            text="Kid's Wear"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;

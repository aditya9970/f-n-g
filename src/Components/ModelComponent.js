import { motion } from "framer-motion";
import appContext from "../cotext/appContext";
import { click, highlight } from "../helpers/animation";

const ModelComponent = ({ children, handleClose, isOpen }) => {
  return (
    <>
      {true && (
        <div
          className="fixed top-0 left-0  flex justify-center items-center "
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            backgroundColor: "rgba(0 ,0,0,0.7)",
            backdropFilter: " blur(4px)",
          }}
          onClick={() => handleClose()}
        >
          {children}
        </div>
      )}
    </>
  );
};

export const DeleteModel = ({ handleDelete, handleClose }) => {
  return (
    <ModelComponent handleClose={handleClose}>
      <div className="p-4 px-8 bg-light rounded" style={{ maxWidth: "90vw" }}>
        <p className="pb-6 text-xl">Do you want to delete this form?</p>
        <motion.button
          whileHover={highlight}
          whileTap={click}
          className="px-4 py-1 mr-2 pl-0 rounded-sm "
          onClick={handleClose}
        >
          Cancel
        </motion.button>
        <motion.button
          whileHover={highlight}
          whileTap={click}
          className="px-4 py-1 rounded border-green-500"
          onClick={handleDelete}
          style={{ backgroundColor: "#48A44C" }}
        >
          Delete
        </motion.button>
      </div>
    </ModelComponent>
  );
};

export const PreviewModel = () => {
  <ModelComponent handleClose={handleClose}>
    <div
      className="p-4 px-8 bg-light rounded"
      style={{ maxWidth: "90vw" }}
    ></div>
  </ModelComponent>;
};

export default ModelComponent;

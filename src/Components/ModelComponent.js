import { AnimatePresence, motion } from "framer-motion";
import { click, highlight, SlideInBack } from "../helpers/animation";

const ModelComponent = ({ children, handleClose, isOpen }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0  flex justify-center items-center "
        variants={SlideInBack}
        initial="hidden"
        animate="visible"
        exit="exit"
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
      </motion.div>
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

export const PreviewModel = ({ handleClose, data }) => {
  return (
    <ModelComponent handleClose={handleClose}>
      <div
        className="p-4 px-8 bg-light rounded flex-row lg:flex-col relative"
        style={{ maxWidth: "90vw" }}
      >
        <div
          className="absolute  text-center  bg-gray-700	 text-white"
          style={{
            width: "25px",
            height: "25px",
            top: "-10px",
            right: "-10px",
            borderRadius: "100%",
          }}
        >
          x
        </div>
        <div
          className="flex-1 grid mx-2"
          style={{ gridTemplateColumns: "min-content 1fr" }}
        >
          <div className="p-1">Name</div>
          <div className="p-1 text-gray-500	" style={{ overflow: "hidden" }}>
            {data.customerName}
          </div>
          <div className="p-1">Email</div>
          <div className="p-1 text-gray-500	" style={{ overflow: "hidden" }}>
            {data.email}
          </div>
          <div className="p-1">phone</div>
          <div className="p-1 text-gray-500	" style={{ overflow: "hidden" }}>
            {data.phoneNo}
          </div>
        </div>
        <div
          className="flex-1 grid mx-2 mt-4"
          style={{ gridTemplateColumns: "1fr min-content" }}
        >
          <div className="p-1 ">
            Quality of the service you received from Host.
          </div>
          <div className="p-1 text-right text-grey-500">
            {data.question1}
            /5
          </div>
          <div className="p-1 ">Quality of Beverage</div>
          <div className="p-1 text-right text-grey-500">
            {data.question2}
            /5
          </div>
          <div className="p-1 ">Cleanlines of Restaurant</div>
          <div className="p-1 text-right text-grey-500">
            {data.question3}
            /5
          </div>
          <div className="p-1 "> Overall Experience</div>
          <div className="p-1 text-right text-grey-500">
            {data.question4}
            /5
          </div>
        </div>
      </div>
    </ModelComponent>
  );
};

export default ModelComponent;

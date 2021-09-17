import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import appContext from "../cotext/appContext";
import { alertAnimation } from "../helpers/animation";

const AlertComponent = () => {
  const { values, setValues } = useContext(appContext);

  useEffect(() => {
    values.alert && setTimeout(() => setValues({ type: "closeAlert" }), 15000);
  }, [values.alert]);
  return (
    <div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {values.alert && (
          <motion.div
            className=" fixed px-8 py-4 bg-white border pr-4 lg:w-6/12 md:w-8/12 w-full text-center rounded bg-green-500 text-white"
            style={{
              backgroundColor: "rgb(72, 164, 76)",
              left: "50%",
            }}
            variants={alertAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {values.alert}{" "}
            <span
              className="absolute"
              style={{ right: " 16px" }}
              onClick={() => setValues({ type: "closeAlert" })}
            >
              x
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlertComponent;

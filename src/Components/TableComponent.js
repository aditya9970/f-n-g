import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import appContext from "../cotext/appContext";
import { slideInRight } from "../helpers/animation";
import { DeleteModal, PreviewModal } from "./ModalComponent";

const TableComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 10,
      transition: { delay: i * 0.1, duration: 1 },
    }));
  }, []);

  const handleEdit = (i) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValues({ type: "editForm", payload: i });
  };
  const handleDelete = (i) => (e) => {
    e.stopPropagation();

    setDeleteModal({ ...deleteModal, isOpen: !deleteModal.isOpen, index: i });
  };
  const { values, setValues } = useContext(appContext);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, index: -1 });
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    index: -1,
  });

  const togglePreview = (i) => {
    setPreviewModal({
      ...previewModal,
      isOpen: !previewModal.isOpen,
      index: previewModal.isOpen ? -1 : i,
    });
  };

  function empty() {
    if (values.forms.length === 0)
      return (
        <div className="text-sm text-gray-400 text-center py-4">
          Looks like list is Empty.
          <br /> Go to form tab to create an entry
        </div>
      );
  }

  function tableRow(form, i) {
    return (
      <motion.tr
        key={i}
        custom={i + 1}
        animate={controls}
        initial={{ opacity: 0 }}
        whileHover={{
          translate: "5px",
        }}
        exit={{
          opacity: 0,
        }}
        onClick={() => togglePreview(i)}
        className="p-0 m-0"
      >
        <td className="px-6 pl-3 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="">
              <div className="text-sm font-medium text-gray-900">
                {form.customerName}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{form.phoneNo}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
          {form.question4}/5
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {form.email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <motion.i
            class="fas fa-edit mx-2 "
            onClick={handleEdit(i)}
          ></motion.i>
          <motion.i
            class="fas fa-ban mx-2 "
            onClick={handleDelete(i)}
          ></motion.i>
        </td>
      </motion.tr>
    );
  }

  function emptyRow() {
    return (
      <tr>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <motion.div
      className="py-4"
      variants={slideInRight}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {previewModal.isOpen && (
          <PreviewModal
            handleClose={togglePreview}
            data={previewModal.isOpen && values.forms[previewModal.index]}
          />
        )}
        {deleteModal.isOpen && (
          <DeleteModal
            handleClose={() => {
              setDeleteModal({ ...deleteModal, isOpen: !deleteModal.isOpen });
            }}
            handleDelete={() => {
              setValues({
                type: "deleteForm",
                payload: deleteModal.index,
              });
              setDeleteModal({ ...deleteModal, isOpen: !deleteModal.isOpen });
            }}
          />
        )}
      </AnimatePresence>
      <h1 className="text-3xl text-dark py-8 pt-4 stickyheaders">
        All Feedback
      </h1>
      <div className="flex flex-col">
        <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ratings
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {values.forms && values.forms.length !== 0
                    ? values.forms.map((form, i) => tableRow(form, i))
                    : emptyRow()}
                </tbody>
              </table>
            </div>
            {empty()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TableComponent;

// const one = {
//  return (<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//       <div className="flex-1 flex justify-between sm:hidden">
//         <a
//           href="#"
//           className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//         >
//           Previous
//         </a>
//         <a
//           href="#"
//           className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//         >
//           Next
//         </a>
//       </div>
//       <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//         <div>
//           <p className="text-sm text-gray-700">
//             Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
//             <span className="font-medium">97</span> results
//           </p>
//         </div>
//         <div>
//           <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//             <a
//               href="#"
//               className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//             {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
//             <a
//               href="#"
//               aria-current="page"
//               className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//             >
//               1
//             </a>
//             <a
//               href="#"
//               className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//             >
//               2
//             </a>
//             <a
//               href="#"
//               className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
//             >
//               3
//             </a>
//             <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
//               ...
//             </span>
//             <a
//               href="#"
//               className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
//             >
//               8
//             </a>
//             <a
//               href="#"
//               className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//             >
//               9
//             </a>
//             <a
//               href="#"
//               className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//             >
//               10
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>)
// }

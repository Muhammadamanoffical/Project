// eslint-disable-next-line no-unused-vars
import React from "react";
import { Dialog } from '@headlessui/react';
import { Link } from "react-router-dom";
function  Nonpage(){
    const [isOpen, setIsOpen] = React.useState(true);

    const closeModal = () => setIsOpen(false);
  
    return (
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-md p-6 mx-auto bg-white rounded shadow-lg">
            <Dialog.Title className="text-2xl font-bold">404 - Page Not Found</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              Sorry, the page you are looking for does not exist.
            </Dialog.Description>
            <div className="mt-4">
              <Link to={"/"}>
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-blue-500 rounded"
              >
                Go Back Home
              </button></Link>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  };

export default Nonpage;
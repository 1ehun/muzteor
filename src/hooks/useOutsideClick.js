import React, { useEffect } from "react";

/**
 * Calls the callback function if user clicks outside the element
 * @param {RefObject} ref
 * @param {function} callback
 */
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback();
      console.log('rabotae')
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClick;
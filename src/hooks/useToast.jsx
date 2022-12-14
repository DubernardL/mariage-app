import toast from "react-hot-toast";

// const toastConfig = {
//   duration: 4000,
//   position: "top-center",

//   // Styling
//   style: {},
//   className: "",

//   // Custom Icon
//   icon: "👏",

//   // Change colors of success/error/loading icon
//   iconTheme: {
//     primary: "#000",
//     secondary: "#fff",
//   },

//   // Aria
//   ariaProps: {
//     role: "status",
//     "aria-live": "polite",
//   },
// };

const useToast = (text) => {
  return toast.success(text);
};

export default useToast;

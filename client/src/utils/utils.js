import { DNA } from "react-loader-spinner";

export const getFormattedData = () => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
    timeZone: "Asia/Kolkata", // Indian Standard Time (IST)
  };

  const formattedDate = new Date().toLocaleString("en-IN", dateOptions);
  return formattedDate;
};

export const getActiveTasksCount = (TodosList) => {
  const inCompletedTasks = TodosList.filter(
    (eachTodo) => eachTodo.completed === false
  );
  return inCompletedTasks.length;
};

export const Loader = () => {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

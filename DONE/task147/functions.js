export const formatTaskList = (tasks) => {
  let list = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "DONE") {
      list.push("\u2705" + tasks[i].title);
    } else {
      list.push("\u274c" + tasks[i].title);
    }
  }
  return list;
};

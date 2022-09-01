const headers = (token) => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  return headers;
};

const getGroupTasks = async (token) => {
  const res = await fetch("https://todos-project-api.herokuapp.com/todos", {
    method: "GET",
    headers: headers(token),
  });

  return res;
};

const TaskServices = {
  getGroupTasks,
};

export default TaskServices;

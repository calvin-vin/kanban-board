const headers = (token) => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");

  return headers;
};

const getGroupTasks = async (token) => {
  const res = await fetch("https://todos-project-api.herokuapp.com/todos", {
    method: "GET",
    headers: headers(token),
  });

  return res;
};

const getTasks = async (token, groupId) => {
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items`,
    {
      method: "GET",
      headers: headers(token),
    }
  );

  return res;
};

const createTask = async (token, groupId, formData) => {
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items`,
    {
      method: "POST",
      headers: headers(token),
      body: JSON.stringify(formData),
    }
  );

  return res;
};

const TaskServices = {
  getGroupTasks,
  getTasks,
  createTask,
};

export default TaskServices;

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

const getTask = async (token, groupId, taskId) => {
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items/${taskId}`,
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

const deleteTask = async (token, groupId, taskId) => {
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items/${taskId}`,
    {
      method: "DELETE",
      headers: headers(token),
    }
  );

  return res;
};

const moveTaskToLeft = async (token, groupId, taskId) => {
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items/${taskId}`,
    {
      method: "PATCH",
      headers: headers(token),
      body: JSON.stringify({
        target_todo_id: groupId - 1,
      }),
    }
  );

  return res;
};

const moveTaskToRight = async (token, groupId, taskId) => {
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items/${taskId}`,
    {
      method: "PATCH",
      headers: headers(token),
      body: JSON.stringify({
        target_todo_id: groupId + 1,
      }),
    }
  );

  return res;
};

const updateTask = async (token, groupId, taskId, formData) => {
  const body = { ...formData, target_todo_id: groupId };
  const res = await fetch(
    `https://todos-project-api.herokuapp.com/todos/${groupId}/items/${taskId}`,
    {
      method: "PATCH",
      headers: headers(token),
      body: JSON.stringify(body),
    }
  );

  return res;
};

const TaskServices = {
  getGroupTasks,
  getTasks,
  getTask,
  createTask,
  deleteTask,
  moveTaskToLeft,
  moveTaskToRight,
  updateTask,
};

export default TaskServices;

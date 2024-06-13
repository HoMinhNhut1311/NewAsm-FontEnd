import intance, * as request from "../instanceAxios.js";
// Login -> Select by username & password
export const loginApi = async (username, password) => {
  const response = await request
    .post(`login`, {
      username,
      password,
    })
    .then((res) => ({
      status: res.status,
      data: res.data,
    }));
  return response;
};

//  Select By Id
export const selectById = async (id) => {
  const respone = await request.get(`user/${id}`);
  return respone.data;
};

// Select
export const getListUserOverView = async (numberPage, pageSize, roleId) => {
  const respone = await request.get(`user/page/?roleId=${roleId}
    &&pageNumber=${numberPage}&&pageSize=${pageSize}`);
  return respone.data;
};

// Set User Containing
export const getAllUserByContainingUsername = async (username) => {
  const respone = await request.get(`user/username/${username}`);
  return respone.data;
};

// Create User
export const createUser = async ({ username, password, roleNames }) => {
  const respone = await request
    .post("user/", {
      username: username,
      password: password,
      roleNames: roleNames,
    })
    .catch((error) => {
      return error;
    });
  return respone;
};

// Update User Api
export const UpdateUser = async (userId, username, password, roleNames) => {
  const response = await intance.put(`user/${userId}`, {
    username: username,
    password: password,
    roleNames: roleNames,
  });
  return response.data;
};

// Update Profile Api
export const UpdateProfile = async (
  profileId,
  fullname,
  sex,
  birth,
  email,
  phone,
  userId
) => {
  const response = await intance.put(`profile/${profileId}`, {
    fullname: fullname,
    sex: sex,
    birth: birth,
    email: email,
    phone: phone,
    userId: userId,
  });
  return response.data;
};

// Upload Image Profile
export const UploadImageProFile = async (profileId, formData) => {
  const respone = await request.post(
    `mediaFile/profile/${profileId}`,
    formData
  );
  return respone;
};

// Delete User
export const RemoveUserApi = async (userId) => {
  const response = await intance.delete(`user/${userId}`).catch((error) => {
    return error;
  });
  return response;
};

// Get Users By Role Id
export const getUsersByRoleId = async (roleId) => {
  const response = await intance.get(`user/role/${roleId}`);
  return response.data;
};

import intance, * as request from '../instanceAxios.js'



// Select UserOverView_UserCount (Số lượng mỗi role) -> Response UserOverViewDtoResponse
export const getCountUser = async () => {
    const respone =  await request.get('role/overview')
    return respone.data;
  }


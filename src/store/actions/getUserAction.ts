// import { getUserApi } from "apis";
import types from "./types";

const getDataUser = () => async (dispatch: any) => {
  try {
    // const { data }: any = await getUserApi();
    dispatch({
      type: types.GET_DATA_USER,
      // dataUser: data,
    });
  } catch (error) {}
};
export default { getDataUser };

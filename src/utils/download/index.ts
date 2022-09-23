/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-06-10 13:58:14
 * @modify date 2022-06-10 13:58:14
 * @desc [description]
 */


export const fileName = (url: string) => {
  const name = url.replace(/^.*[\\\/]/, "");
  console.log("fileName", name);
  return name;
};

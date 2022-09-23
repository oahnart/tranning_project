import { mainAxios } from "libs/axios";

/**send mail props type */
// interface sendMailProps {
//   platformCode: string;
//   senderName: string;
//   emailReceiveResult: string;
//   subject: string;
//   content: string;
// }

// export const sendMailApi = (payload: sendMailProps) => {
//   return mainAxios.request({
//     methodType: "POST",
//     url: `/request-contact/send-mail`,
//     params: payload,
//     // requiresToken: true,
//     config: { 
//       headers: {
//         contentType: "application/json",
//       },
//     },
//   });
// };

/**list news props type */

export const statisticalApi = () => {
  return mainAxios.request({
    methodType: "GET",
    url: `/statistical/home`,
    config: {
      headers: {
        contentType: "application/json",
      },
    },
  });
};

interface topListProps {
  type: string;
}

export const topListApi = (payload: topListProps) => {
  return mainAxios.request({
    methodType: "GET",
    url: `project/top-list`,
    params: payload,
    config: {
      headers: {
        contentType: "application/json",
      },
    },
  });
};

interface tableHomeProps {
  perPage: string;
  page: string;
  query: string;
  sort: string;
  direction: string;
  category: string;
  badge: string;
}

export const tableHomeApi = (payload: tableHomeProps) => {
  return mainAxios.request({
    methodType: "GET",
    url: `/project/get-list`,
    params: payload,
    // requiresToken: true,
    config: { 
      headers: {
        contentType: "application/json",
      },
    },
  });
};


export const statisticalHomeApi = () => {
  return mainAxios.request({
    methodType: "GET",
    url: "statistical/home",
    config: {
      headers: {
        contentType: "application/json",
      }
    }
  })
};

export const getBarChartApi = () => {
  return mainAxios.request({
    methodType: "GET",
    url: "project/most-category",
    config: {
      headers: {
        contentType: "application/json",
      }
    }
  })
};

export const getLineChartApi = () => {
  return mainAxios.request({
    methodType: "GET",
    url: "statistical/chart-total-amount",
    config: {
      headers: {
        contentType: "application/json",
      }
    }
  })
}

export const getCategoryApi = () => {
  return mainAxios.request({
    methodType: "GET",
    url: "project/get-categories",
    config: {
      headers: {
        contentType: "application/json",
      }
    }
  });
}

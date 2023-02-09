import React, { useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axiosServices from "~/utils/axios";
import { classNames } from "~/utils/classNames";
import { TablePagination } from "@mui/material";

const sample = [
  {
    id: 1,
    userId: 1,
    title: "sample title",
    body: "sample body",
  },
  // More people...
];

const PostManagement = () => {
  const [data, setData] = React.useState(sample);
  const dataURL = "https://jsonplaceholder.typicode.com/posts"; // put to env

  const successCallback = (response: any) => {
    console.log(
      "🚀 ~ file: index.tsx:20 ~ successCallback ~ response",
      response
    );
    setData(response.data);
  };
  const errorCallback = (error: any) => {
    console.log("🚀 ~ file: index.tsx:26 ~ errorCallback ~ error", error);
  };
  const getData = async () =>
    await axiosServices.get(dataURL).then(successCallback).catch(errorCallback);

  // display 20 data
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [totalPage, setTotalPage] = React.useState(0);
  const [dataDisplay, setDataDisplay] = React.useState<any[]>([]);
  const [isAscending, setIsAscending] = React.useState(true);

  const calculateTotalPage = () => {
    const totalPage = Math.ceil(data.length / limit);
    setTotalPage(totalPage);
  };

  const calculateDataDisplay = () => {
    const dataDisplay = data.slice(page * limit, page * limit + limit);
    setDataDisplay(dataDisplay);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortByUserId = () => {
    const sortedData = dataDisplay.sort((a, b) => {
      if (isAscending) {
        return a.userId - b.userId;
      } else {
        return b.userId - a.userId;
      }
    });
    setDataDisplay(sortedData);
    setIsAscending(!isAscending);
  };

  console.log("🚀 ~ file: index.tsx:30 ~ data", dataDisplay);

  useEffect(() => {
    calculateTotalPage();
    calculateDataDisplay();
  }, [data, page, limit]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      <div className="flex items-center">
                        User Id
                        <button onClick={handleSortByUserId}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 ml-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {dataDisplay.map((content, index) => (
                    <tr key={index}>
                      <td
                        className={classNames(
                          index !== dataDisplay.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                        )}
                      >
                        {content.id}
                      </td>
                      <td
                        className={classNames(
                          index !== dataDisplay.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                        )}
                      >
                        {content.userId}
                      </td>
                      <td
                        className={classNames(
                          index !== dataDisplay.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                        )}
                      >
                        {content.title}
                      </td>
                      <td
                        className={classNames(
                          index !== dataDisplay.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap px-3 py-4 text-sm font-medium sm:pr-6 lg:pr-8"
                        )}
                      >
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <VisibilityIcon />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-4 mb-6 items-center justify-center">
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={limit}
            onRowsPerPageChange={handleChangeLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default PostManagement;

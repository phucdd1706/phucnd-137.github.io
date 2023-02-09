import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axiosServices from "~/utils/axios";
import { classNames } from "~/utils/classNames";

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
  const dataURL = "https://jsonplaceholder.typicode.com/posts";
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
  console.log("🚀 ~ file: index.tsx:30 ~ data", data);

  React.useEffect(() => {
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
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Role
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
                  {data.map((content, index) => (
                    <tr key={index}>
                      <td
                        className={classNames(
                          index !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {content.id}
                      </td>
                      <td
                        className={classNames(
                          index !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                        )}
                      >
                        {content.userId}
                      </td>
                      <td
                        className={classNames(
                          index !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                        )}
                      >
                        {content.title}
                      </td>
                      <td
                        className={classNames(
                          index !== data.length - 1
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
      </div>
    </div>
  );
};

export default PostManagement;

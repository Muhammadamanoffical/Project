/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../../../context/data/myContext";

function ProductTable({ products }) {
  const { mode } = useContext(MyContext);

  return (
    <table>
      <tbody>
        {products.map((item, index) => {
          const { title, price, imageUrl, category, date } = item;
          return (
            <tr
              key={index}
              className="bg-gray-50 border-b dark:border-gray-700"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <td
                className="px-6 py-4 text-black"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {index + 1}.
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                <img className="w-16" src={imageUrl} alt="img" />
              </th>
              <td
                className="px-6 py-4 text-black"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {title}
              </td>
              <td
                className="px-6 py-4 text-black"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                ₹{price}
              </td>
              <td
                className="px-6 py-4 text-black"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {category}
              </td>
              <td
                className="px-6 py-4 text-black"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {date}
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <div
                    className="flex gap-2 cursor-pointer text-black"
                    style={{
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                    <Link to={"/updateproduct"}>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;

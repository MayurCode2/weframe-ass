import React from "react";

function Home() {
  return (
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="flex items-center justify-between h-48 mb-4 rounded  dark:bg-gray-800">
            <div className=" text-4xl text-black mx-4">
              <h2>Recurring Invoices</h2>
            </div>
            <div className="bg-black mx-6 text-white  text-center rounded-xl">
              <p className="mx-8 my-6">Add recurring Invoice +</p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center flex-col rounded bg-gray-50 dark:bg-gray-800">
              <p class=" text-xs my-5 text-gray-400 dark:text-gray-500">
                RECURRING INVOICES
              </p>
              <h3 className="my-8 text-4xl">215</h3>
            </div>
            <div class="flex items-center justify-center flex-col rounded bg-gray-50 dark:bg-gray-800">
              <p class=" text-xs my-5 text-gray-400 dark:text-gray-500">
                RECURRING REVENUE
              </p>
              <h3 className="my-8 text-4xl">
                £25000<span className="text-sm">/month</span>
              </h3>
            </div>
            <div class="flex items-center justify-center flex-col rounded bg-gray-50 dark:bg-gray-800">
              <p class=" text-xs my-5 text-gray-400 dark:text-gray-500">
                RECURRING OVERDUE
              </p>
              <h3 className="my-8 text-4xl">22</h3>
            </div>
          </div>

          <div class="flex flex-col  mb-4 rounded  dark:bg-gray-800">
            <p class="text-2xl text-black mx-3 ">Per client</p>
            <div className="my-3 mx-3">
              <input
                type="text"
                className=" border-none bg-gray-200 rounded-md w-80"
                placeholder="Search client"
              />
              <button className="bg-black text-white px-7 py-2 mx-1 rounded-md">
                Search
              </button>
            </div>
          </div>
          <div class=" dark:bg-gray-800">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-6 py-4">
                            {" "}
                            CLIENT
                          </th>
                          <th scope="col" class="px-6 py-4">
                            SEND
                          </th>
                          <th scope="col" class="px-6 py-4">
                            END DATE
                          </th>
                          <th scope="col" class="px-6 py-4">
                            INTERVAL
                          </th>
                          <th scope="col" class="px-6 py-4">
                            AMOUNT
                          </th>
                          <th scope="col" class="px-6 py-4">
                            EDIT
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            <div className="flex">
                              <img
                                src="public/Rectangleicon.svg"
                                alt="imges"
                                className=" w-9"
                              />
                              <p className="mx-2 my-2">Madebymayur</p>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">25</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            24-20-2024
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            3/<span>month</span>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">£3000</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button className=" border-black ">Edit</button>
                          </td>
                        </tr>
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            <div className="flex">
                              <img
                                src="public/Rectangleicon.svg"
                                alt="imges"
                                className=" w-9"
                              />
                              <p className="mx-2 my-2">Madebymayur</p>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">25</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            24-20-2024
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            3/<span>month</span>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">£3000</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button className=" border-black">Edit</button>
                          </td>
                        </tr>
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            <div className="flex">
                              <img
                                src="public/Rectangleicon.svg"
                                alt="imges"
                                className=" w-9"
                              />
                              <p className="mx-2 my-2">Madebymayur</p>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">25</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            24-20-2024
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            3/<span>month</span>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">£3000</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button className=" border-black">Edit</button>
                          </td>
                        </tr>
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            <div className="flex">
                              <img
                                src="public/Rectangleicon.svg"
                                alt="imges"
                                className=" w-9"
                              />
                              <p className="mx-2 my-2">Madebymayur</p>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">25</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            24-20-2024
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            3/<span>month</span>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">£3000</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button className=" border-black">Edit</button>
                          </td>
                        </tr>
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            <div className="flex">
                              <img
                                src="public/Rectangleicon.svg"
                                alt="imges"
                                className=" w-9"
                              />
                              <p className="mx-2 my-2">Madebymayur</p>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">25</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            24-20-2024
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            3/<span>month</span>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">£3000</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button className=" border-black">Edit</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

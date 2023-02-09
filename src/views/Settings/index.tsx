// THIRD-PARTY IMPORTS
import React, { useCallback, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HexColorPicker } from "react-colorful";
import { useFormik } from "formik";
import * as Yup from "yup";
import Regex from "~/utils/regex";

// LOCAL IMPORTS
import useClickOutside from "./useClickOutside";

export default function Settings() {
  const [pickDate, setPickDate] = useState<Date | null>(new Date());
  const [color, setColor] = useState("#aabbcc");
  const popover = useRef<any>();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  const formik = useFormik({
    initialValues: {
      title: "",
      email: "",
      bgColor: "",
    },
    validationSchema: Yup.object({
      title: Yup.string(),
      email: Yup.string()
        .email("Invalid email address")
        .matches(Regex().email, "Invalid email address"),
      bgColor: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
      <section aria-labelledby="payment-details-heading">
        <form action="#" onSubmit={formik.handleSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    value={formik.values.title}
                    name="title"
                    onChange={formik.handleChange}
                    id="title"
                    autoComplete="cc-title"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="email"
                    autoComplete="cc-email"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                  />
                  <label
                    htmlFor="email"
                    className="text-red-500 text-sm absolute z-10"
                  >
                    {formik.errors.email}
                  </label>
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="bgColor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Background Color
                  </label>
                  <input
                    type="text"
                    style={{ color: color }}
                    onChange={formik.handleChange}
                    value={formik.values.bgColor}
                    name="bgColor"
                    id="bgColor"
                    onClick={() => toggle(!isOpen)}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                  />
                  {isOpen && (
                    <div className="popover z-10 absolute" ref={popover}>
                      <HexColorPicker color={color} onChange={setColor} />
                    </div>
                  )}
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <DatePicker
                    selected={pickDate}
                    onChange={(date) => setPickDate(date)}
                    customInput={
                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Active Date
                        </label>
                        <input
                          type="text"
                          value={pickDate?.toDateString()}
                          name="postal-code"
                          id="postal-code"
                          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
              {!(
                formik.values.bgColor === "" &&
                formik.values.email === "" &&
                formik.values.title === ""
              ) && (
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 z-0">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

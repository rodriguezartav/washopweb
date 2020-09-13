import React from "react";

import { useMutation } from "data/Api";

export default function form(props) {
  const [mutate, state] = useMutation("product/search");

  const inputRef = React.useRef();

  React.useEffect(() => {
    if (state.loaded && state.data.length == 0)
      props.onSelect({ name: inputRef.current.value, price: 0, image: "" });
  }, [state.data]);

  const onClick = (item) => {
    return () => {
      inputRef.current.value = item.name;
      props.onSelect(item);
    };
  };

  const onChange = (e) => {
    mutate({ searchTerm: e.currentTarget.value });
  };

  const renderItems = () => {
    return state.data.map((item) => {
      return (
        <li
          onClick={onClick(item)}
          id="listbox-item-0"
          role="option"
          className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
        >
          <div className="flex space-x-2">
            {/* Selected: "font-semibold", Not Selected: "font-normal" */}
            <span className="font-normal truncate">{item.name}</span>
            {/* Highlighted: "text-blue-200", Not Highlighted: "text-gray-500" */}
            <span className="text-gray-500 truncate">@wadecooper</span>
          </div>

          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </li>
      );
    });
  };

  const renderProductResults = () => {
    if (!state.data || props.product.name) return null;
    return (
      <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
        >
          {renderItems()}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <form autocomplete="off">
        <div className="relative">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Nombre del Producto
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              ref={inputRef}
              autocomplete="false"
              onChange={onChange}
              className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          {renderProductResults()}
        </div>
      </form>
    </div>
  );
}

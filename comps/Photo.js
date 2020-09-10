import React from "react";

import { useUpload } from "../../data/Api";

export default function PhotoFileUpload(props) {
  const { url } = props;
  const [upload, state] = useUpload();
  const fileInput = React.useRef();

  React.useEffect(() => {
    if (state.success) props.onChange(state.data.url);
  }, [state.success]);

  const onSelectInput = () => {
    fileInput.current.click();
  };

  const onChange = async (event) => {
    const files = event.target.files;
    upload(files[0]);
  };

  return (
    <React.Fragment>
      {(url || state.data.url) && (
        <img src={url || state.data.url} className="h-20 w-28 object-cover" />
      )}

      <span className="ml-5 rounded-md shadow-sm">
        <button
          onClick={onSelectInput}
          type="button"
          className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
        >
          Escoger
        </button>
      </span>
      <input
        accept="image/png, image/jpeg, image/gif"
        className="hidden"
        ref={fileInput}
        type="file"
        onChange={onChange}
      />
    </React.Fragment>
  );
}

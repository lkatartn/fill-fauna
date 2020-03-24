import { FunctionComponent, InputHTMLAttributes } from "react";

export const TextInput: FunctionComponent<InputHTMLAttributes<{}>> = props => {
  return (
    <>
      <input type="text" {...props} />
      <style jsx>
        {`
          input {
            margin: 10px 0;
            box-shadow: none;
            box-sizing: border-box;
            display: block;
            font-size: 14px;
            line-height: 26px;
            width: 100%;
            color: #000;
            background-color: transparent;
            caret-color: #000;
            text-overflow: ellipsis;
            padding: 5px 10px;
            border-style: solid;
            border-width: 1px;
            border-radius: 3px;
            border-color: #000;
            outline: 0px;
          }
          input:focus {
            box-shadow: 0px 0px 0px 1px #323fcb;
          }
        `}
      </style>
    </>
  );
};

export default TextInput;

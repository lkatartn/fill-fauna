export const Button = props => {
  return (
    <>
      <button {...props} />
      <style jsx>
        {`
          button {
            border: 0;
            border-radius: 3px;
            background: #222;
            color: white;
            font-size: 16px;
            line-height: 1.2;
            white-space: nowrap;
            text-decoration: none;
            padding: 8px 12px;
            margin: 10px 0px;
            cursor: pointer;
            outline: none;
          }
          button:focus {
            box-shadow: 0px 0px 0px 2px #323fcb;
          }
          button:hover {
            background: black;
          }
        `}
      </style>
    </>
  );
};

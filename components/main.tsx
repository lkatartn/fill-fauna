import * as React from "react";
import { useDropzone } from "react-dropzone";
import { TextInput } from "./textInput";
import { Button } from "./button";
import { fillCollection, retrieveCollections } from "../services/fill-fauna";
import InfoTooltip from "./info-tooltip";
import { csvParse } from "d3-dsv";
import cogoToast from "cogo-toast";

function parseFile(file: File, setFile: (f: string) => void) {
  const reader = new FileReader();
  reader.onload = () => {
    setFile(reader.result as string);
  };
  reader.readAsText(file);
}
function getFileData(
  fileType: "application/json" | "text/csv",
  rawData: string,
  fileName: string
): {}[] {
  const extension = fileName.split(".").pop();
  if (fileType == "application/json" || extension == "json") {
    return JSON.parse(rawData);
  }
  if (extension == "csv") {
    return csvParse(rawData);
  }
  cogoToast.error(`Extension should be either .csv or .json`);
  return null;
}
export const Main: React.FunctionComponent<{}> = props => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [parsedFile, setParcedFile] = React.useState<string>(null);
  const [token, setToken] = React.useState<string>(null);
  const [collectionName, setCollectionName] = React.useState<string>(null);

  const file = acceptedFiles.slice(-1)[0];
  React.useMemo(() => {
    file && parseFile(file, setParcedFile);
  }, [acceptedFiles[0]]);
  return (
    <>
      {parsedFile && (
        <section>
          <h3>
            Content preview for <code>{file.name}</code>
          </h3>
          <pre>
            {parsedFile
              .substr(0, 700)
              .split("\n")
              .slice(0, 7)
              .join("\n")}
          </pre>
        </section>
      )}
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps({ accept: "*" })} />
        <p>Drag 'n' drop your file here, or click to select one</p>
      </div>
      <p>
        <label>
          Enter access token for your collection{" "}
          <InfoTooltip
            tooltipContent={
              <>
                Access token is used for making requests to your FaunaDB. It
                lives only on this page and won't be pased to third-party.
              </>
            }
          />
          <TextInput
            onChange={e => setToken((e.target as HTMLInputElement).value)}
          />
        </label>
      </p>
      <p>
        <label>
          Enter collection name
          <TextInput
            onChange={e =>
              setCollectionName((e.target as HTMLInputElement).value)
            }
          />
        </label>
      </p>
      <p>
        <Button
          onClick={() => {
            fillCollection(
              token,
              collectionName,
              getFileData(file.type as any, parsedFile, file.name)
            )
              .then(r => {
                cogoToast.success(
                  `You have successfully added ${
                    (r as Array<{}>).length
                  } documents to your collection`
                );
              })
              .catch(e => {
                cogoToast.error(
                  `Error occured while uploading. ${e.name}: ${e.message}`
                );
              });
          }}
        >
          Fill your collection
        </Button>
      </p>
      <style jsx>
        {`
          .dropzone {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border-width: 2px;
            border-radius: 2px;
            border-color: #eeeeee;
            border-style: dashed;
            background-color: #fafafa;
            color: #222222;
            outline: none;
            transition: border 0.24s ease-in-out;
          }
          .dropzone:focus {
            border-color: #323fcb;
          }
        `}
      </style>
    </>
  );
};

export default Main;

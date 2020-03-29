import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tooltip: {
    fontSize: "16px"
  },
  info: {
    display: "inline-block",
    borderRadius: "12px",
    border: "solid black 1px",
    width: "24px",
    height: "24px",
    margin: "0 8px",
    textAlign: "center"
  }
});
interface Props {
  tooltipContent: React.ReactElement;
}
export const InfoTooltip: React.FunctionComponent<Props> = props => {
  const classes = useStyles(props);
  return (
    <Tooltip title={<>{props.tooltipContent}</>} classes={classes}>
      <i className={classes.info}>i</i>
    </Tooltip>
  );
};
export default InfoTooltip;

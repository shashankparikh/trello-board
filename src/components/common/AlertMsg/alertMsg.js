import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import { MessageContainer } from "./style";

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme) => ({
  success: {
    backgroundColor: "#009587",
  },
  error: {
    backgroundColor: "#d50000",
  },
  info: {
    backgroundColor: "#394c6f",
  },
  warning: {
    backgroundColor: "#394c6f",
  },
  icon: {
    fontSize: 14,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
  },
}));

const AlertMsg = (props) => {
  const { variant, duration, anchorOrigin, message, openAlert } = props;
  const [open, setOpen] = useState(openAlert || true);
  const classes = useStyles1();

  useEffect(() => {
    setOpen(openAlert);
  }, [openAlert]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const Icon = variantIcon[variant];

  return (
    <div>
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
      >
        <SnackbarContent
          className={clsx(classes[variant], classes["icon"])}
          message={
            <MessageContainer>
              <Icon className={clsx(variantIcon[variant])} />
              <span>{message || "Alert Message"}</span>
            </MessageContainer>
          }
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>{" "}
            </>
          }
        />
      </Snackbar>
    </div>
  );
};

AlertMsg.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
  open: PropTypes.bool.isRequired,
};

AlertMsg.defaultProps = {
  duration: 3000,
  variant: "error",
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};

export default AlertMsg;

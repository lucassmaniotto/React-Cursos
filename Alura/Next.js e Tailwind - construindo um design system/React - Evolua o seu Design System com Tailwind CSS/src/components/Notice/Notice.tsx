import {
  XMarkIcon,
  InformationCircleIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { Box } from "../Box/Box";
import { Typography } from "../Typography/Typography";
import React from "react";

export type NoticeProps = {
  type: "alert" | "success" | "error";
  children?: React.ReactNode;
  message: string;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckIcon className="w-4 h-4" />;
    case "alert":
      return <InformationCircleIcon className="w-4 h-4" />;
    case "error":
      return <ExclamationTriangleIcon className="w-4 h-4" />;
    default:
      return null;
  }
};

const noticeVariants = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return "text-green-900";
    case "alert":
      return "text-yellow-900";
    case "error":
      return "text-red-900";
    default:
      return "";
  }
};

export const Notice = ({
  children,
  type,
  message,
  className,
  onClose,
  ...rest
}: NoticeProps) => {
  return (
    <Box filledBackground rounded type={type} {...rest}>
      <div className="flex p-4 justify-between items-center">
        <div
          className={`flex gap-2 justify-between items-center ${noticeVariants(type)}`}
        >
          {getIcon(type)}
          <Typography className={`${noticeVariants(type)}`}>
            {message}
          </Typography>
        </div>
        {children}
        {onClose && (
          <XMarkIcon className="w-4 h-4 cursor-pointer" onClick={onClose} />
        )}
      </div>
    </Box>
  );
};

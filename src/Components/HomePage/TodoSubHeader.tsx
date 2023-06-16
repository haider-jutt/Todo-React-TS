import { FC } from "react";
import { Divider, Typography } from 'antd';

interface IsubHeader {
  heading?: string;
}

const TodoSubHeader: FC<IsubHeader> = (props) => {
  const { heading } = props;
  return (
    <div className="mb-8">
      <Typography className="font-bold pt-5 text-lg text-white">{heading}</Typography>
      <Divider plain className="mt-2 bg-white color-white" />
    </div>
  )
}
export default TodoSubHeader;
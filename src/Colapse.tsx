import React from "react";
import AvatarWithText from './Avatar';
import {
  Collapse,
  Card,
  Button,
  Typography,
  CardContent,
} from '@material-ui/core';


export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <div className="flex flex-col items-center">
        <Button className="h-40 " color="secondary" onClick={toggleOpen}>
            <AvatarWithText/>
        </Button>
      <Collapse in={open}>
        <Card className="my-4 mx-auto max-w-md w-full">
          <CardContent>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
      </div>
    </>
  );
}
import { Box } from "@mui/material";
import { useMemo } from  "react";
import { animated, useTransition } from "react-spring";

function Message({ message }) {
    const items = useMemo(
        () =>
          message.split("").map((letter, index) => ({
            item: letter,
            key: index
          })),
        [message]
      );
      const transitions = useTransition(items, item => item.key, {
        trail: 35,
        from: { display: "none" },
        enter: { display: "" }
      });

    return (
        <Box sx={{

        }}>
        {transitions.map(({ item, props, key }) => {
            return (
                <animated.span key={key} style={props}>
                    {item.item}
                </animated.span>
            );
        })}
        </Box>
    )
}

export  default  Message;
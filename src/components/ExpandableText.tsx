import { useState } from "react";
import { Text, Button } from "@chakra-ui/react";

interface Props {
  children: string | null | undefined;
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const textLimit = 350;

  if (!children) return null; // Return null for undefined or null children

  // If text is shorter than the limit, don't show "Read More" button
  if (children.length <= textLimit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : `${children.substring(0, textLimit)}...`;

  return (
    <>
      <Text>{summary} </Text>
      <Button
        size = 'xs'
        fontWeight='bold'
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
        variant="solid"
        mt={2} // Add margin-top to separate button
        aria-label={expanded ? "Show less" : "Read more"} // Accessibility
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
}

export default ExpandableText;


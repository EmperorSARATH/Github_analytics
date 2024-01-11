import { Box } from "@mui/material";

const gridTemplate = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
    `;
const DataGrid = () => {
  return (
    <Box
      width="100%"
      height="100%"
      dislay="grid"
      gap="1.5rem"
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr)",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}
    >
      <Box bgcolor="#000" gridArea="a">
        a
      </Box>
      <Box bgcolor="#000" gridArea="b">
        b
      </Box>
      <Box bgcolor="#000" gridArea="c">
        c
      </Box>
      <Box bgcolor="#000" gridArea="d">
        d
      </Box>
      <Box bgcolor="#000" gridArea="e">
        e
      </Box>
      <Box bgcolor="#000" gridArea="f">
        f
      </Box>
      <Box bgcolor="#000" gridArea="g">
        g
      </Box>
      <Box bgcolor="#000" gridArea="h">
        h
      </Box>
      <Box bgcolor="#000" gridArea="i">
        i
      </Box>
      <Box bgcolor="#000" gridArea="j">
        j
      </Box>
    </Box>
  );
};

export default DataGrid;

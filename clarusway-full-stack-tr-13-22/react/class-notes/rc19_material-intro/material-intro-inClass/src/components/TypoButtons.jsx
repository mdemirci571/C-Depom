import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import {Button, AppBar} from "@mui/material"

const TypoButtons = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        mt={3}
        color="forestgreen"
      >
        MUI Typo
      </Typography>

      <Typography
        variant="body1"
        align="justify"
        mt={4}
        sx={{ backgroundColor: "red", color: "white", fontSize: "1.5rem" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae ad
        facilis voluptates! Exercitationem delectus quas illum quos consectetur!
        Dolorum minus ipsum debitis facilis temporibus harum labore quas eos
        perferendis!
      </Typography>

      <Typography
        variant="overline"
        component={"h2"}
        sx={{ display: "inline-block", marginTop: "1.1rem" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae ad
        facilis voluptates! Exercitationem delectus quas illum quos consectetur!
        Dolorum minus ipsum debitis facilis temporibus harum labore quas eos
        perferendis!
      </Typography>
    </Container>
  )
}

export default TypoButtons

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import React from "react";
import ScrollAnimation from "react-scroll-animation-wrapper";
import logo from "~/public/images/maskulino-logo.svg";
import brand from "~/public/text/brand";
import { useText } from "~/theme/common";
import ContactForm from "../Contact/Form";
import useStyles from "./footer-style";

function Footer() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid
          container
          spacing={6}
          direction={isMobile ? "column-reverse" : "row"}
        >
          <Grid item xs={12} md={5}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <div className={classes.logo}>
                  <img src={logo} alt="logo" />
                  <Typography variant="h3" className={text.title}>
                    {brand.maskulino.name}
                  </Typography>
                  <Typography variant="h4" className={text.subtitle}>
                    {brand.maskulino.title}
                  </Typography>
                </div>
                <div className={classes.socmed}>
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <a
                      href="https://www.facebook.com/coolhead04"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ion-logo-facebook" />
                    </a>
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <a
                      href="https://www.linkedin.com/in/coolhead/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ion-logo-linkedin" />
                    </a>
                  </IconButton>
                </div>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.download}
                  component="a"
                >
                  Download CV
                </Button>
                <div className={classes.contact}>
                  <Typography className={text.paragraph}>
                    {t("maskulino-landing.footer_contact")}
                    <br />
                    +8801717457286
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t("maskulino-landing.footer_hello")}
                    <br />
                    coolhead2k4
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={7}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;

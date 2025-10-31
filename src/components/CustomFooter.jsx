import { Footer, FooterLink, FooterLinkGroup } from "flowbite-react";

const CustomFooter = () => {
  return (
    <Footer container>
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default CustomFooter;

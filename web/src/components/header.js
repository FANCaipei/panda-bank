import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goPage = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold'>LOGO HERE</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link
            className='cursor-pointer'
            color='foreground'
            onClick={() => goPage("/page1")}
          >
            Page1
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current='page'>Customers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground'>Integrations</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} color='primary' href='/page1' variant='flat'>
            LogIn
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

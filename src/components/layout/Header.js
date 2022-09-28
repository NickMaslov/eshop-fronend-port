import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg='success' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>Smartphone Shopper</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse
                    id='basic-navbar-nav'
                    className='justify-content-end'
                >
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/cart'>Cart</Nav.Link>
                        <Nav.Link href='/user'>User</Nav.Link>
                        <Nav.Link href='/admin'>Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

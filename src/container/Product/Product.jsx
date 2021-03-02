import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Container
  } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CardProduct from '../CardProduct/CardProduct';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

  

class Product extends Component{
    state = {
        order: 0, 
        showComponent: true
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent : false
        //     })
        // }, 15000)
    }

    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>{this.state.order} <FontAwesomeIcon icon={faShoppingCart} /></NavbarText>
                    </Collapse>
                </Navbar>
                <br />
                <Container>
                        <CardProduct onCounterChange = {(value) => this.handleCounterChange(value)}/>
                        <br />
                        {
                            this.state.showComponent ? <LifeCycleComp /> : null
                        }
                </Container>
            </div>
        )
    }
}

export default Product;
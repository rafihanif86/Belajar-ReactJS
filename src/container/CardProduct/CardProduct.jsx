import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, InputGroup,
    InputGroupAddon, Input
  } from 'reactstrap';
  

class CardProduct extends Component{
    state = {
        order: 0
    }

    handleminus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order)
            })
        }
    }

    handleplus = () =>{
        this.setState({
            order: this.state.order + 1
        }, () =>{
            this.handleCounterChange(this.state.order)
        })
    }
    
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    render(){
        return(
            <div>
                <Card>
                    <CardImg top width="100%" src="https://asset.kompas.com/crops/yoovaRyPxaPFOY4gfCciore2eUY=/3x0:700x465/750x500/data/photo/2020/12/30/5fec5602f116e.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Ayam Bakar Mentega</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Rp. 25.000</CardSubtitle>
                        <CardText>Ayam yang dimasak dengan cara dibakar dengan mentega hingga menghasilkan rasa yang lezat</CardText>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend"><Button onClick={this.handleminus}>-</Button></InputGroupAddon>
                            <Input type="text" text="center" value={this.state.order} />
                            <InputGroupAddon addonType="prepend"><Button onClick={this.handleplus}>+</Button></InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardProduct;
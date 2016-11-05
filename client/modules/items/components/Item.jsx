import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Panel, Glyphicon, Checkbox, FormGroup } from 'react-bootstrap';
import moment from 'moment';

class Item extends React.Component {

  render() {
    const {item, currentDate} = this.props;
    const style = item.due < currentDate ? {'border': 'solid 1px red'} : {'border': 'solid 1px #e3e3e3'};

    return (
      <Col xs={4}>
        <Panel style={style}>
          <Row>
            <Col xs={10}>
              <h2> {item.name} </h2>
            </Col>
            <Col xs={2}>
              <a href={`/edit/${item._id}`}><Glyphicon glyph="pencil"></Glyphicon></a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p> {item.description} {item.due ? '- ' + moment(Number(item.due)).format("MM/DD/YYYY") : ''} </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                {/*Using "Checkbox" instead of "FormControl", but both still work.*/}
                <Checkbox ref="complete" label="Complete?" defaultValue="false" onChange={this.markComplete.bind(this)}/>
              </FormGroup>
            </Col>
          </Row>
        </Panel>
      </Col>
    )
  }

  markComplete(){
    // const complete = ReactDOM.findDOMNode(complete).checked;
    //Ugly workaround, but I got it to work i think...
    this.refs.complete.value = !this.refs.complete.value; //Switching the boolean value to the oposite each time the checkbox gets changed.
    const complete = this.refs.complete.value;
    const itemId = this.props.item._id;
    Meteor.call('items.markComplete', complete, itemId); //Passes an boolean (complete) and an item id (itemId) to the items.markComplete method from server/methods/items.js
  }
};


export default Item;

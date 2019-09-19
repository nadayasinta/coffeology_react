import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { connect } from "unistore/react";

class BeanPage extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center d-block">
                        <Accordion defaultActiveKey="0">
                            {this.props.origins.map((origin, index) =>
                                index !== 4 ? (
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey={origin.id}
                                        >
                                            {origin.name}
                                        </Accordion.Toggle>
                                        {this.props.beans[origin.id].map(
                                            (bean, index) => (
                                                <Accordion.Collapse
                                                    eventKey={bean.id}
                                                >
                                                    <Card.Body>
                                                        {bean.name}
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            )
                                        )}
                                    </Card>
                                ) : (
                                    <span></span>
                                )
                            )}
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("origins,beans")(BeanPage);
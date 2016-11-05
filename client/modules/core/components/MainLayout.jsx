import React from 'react';
import { Grid, Row, Col, PageHeader} from 'react-bootstrap';
import ItemProgress from '../../items/components/ItemProgress.jsx';
import Navbar from './NavBar.jsx';

const Layout = ({content}) => (
  <Grid>
    <Navbar />
    <Row>
      <Col xs={12}>
        <PageHeader> Restaurapp </PageHeader>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
      </Col>
    </Row>
    {content()}
  </Grid>
);

export default Layout;

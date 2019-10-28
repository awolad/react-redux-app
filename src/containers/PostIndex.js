import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import AdPosts from '../components/AdPosts';
import AdPageHeaderImage from '../components/AdPageHeaderImage';
import AdBreadcrumb from '../components/AdBreadcrumb';
import { fetchPosts } from '../actions/post';

class PostIndex extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    console.log('dispatching...');
    dispatch(fetchPosts());
    console.log('dispached...');
  }

  render() {
    const { post } = this.props;
    const breadcrumbItems = [
      { url: '/', text: 'Home', active: false },
      { url: '/posts', text: 'Posts', active: true },
    ];

    return (
      <>
        <AdPageHeaderImage />
        <Container>
          <Row>
            <Col md={12}>
              <AdBreadcrumb data={breadcrumbItems} />
              <AdPosts data={post} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { post } = state;

  return {
    post,
  };
};

export default withRouter(connect(mapStateToProps)(PostIndex));

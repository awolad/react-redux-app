import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdNavBar from '../components/AdNavBar';
import AdMainSlider from '../components/AdMainSlider';
import { fetchCategories } from '../actions/category';
import {
  getCategoriesError,
  getCategories,
  getCategoriesPending,
} from '../reducers/category';

// const Default = ({ children }) => (
//   <>
//     <div className="default-layout">
//       <AdNavBar />
//       <AdMainSlider />
//       {children}
//     </div>
//   </>
// );

class Default extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // const { children } = this.props;
    // console.log(children);
    const { dispatch } = this.props;
    dispatch(fetchCategories());
    // console.log('dispatch()');
  }

  render() {
    const { children, category } = this.props;
    return (
      <>
        <div className="default-layout">
          <AdNavBar />
          <AdMainSlider />
          {children}
          {console.log('------------------categories--------------')}
          {/* {console.log(posts)} */}
          {/* {category ? console.log(category) : 'fds'} */}
          {console.log('error', category.error)}
          {console.log('----------------categories----------------')}

          {category.pending ? (
            <h2>Loading...</h2>
          ) : (
            <ul>
              {category.categories.map((singleCategory, i) => (
                <li key={i}>{singleCategory.title}</li>
              ))}
            </ul>
          )}

          {/* <ul>
            {category.categories.map((singleCategory, i) => (
              <li key={i}>{singleCategory.title}</li>
            ))}
          </ul> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { category } = state;

  return {
    category,
  };
};

// const mapStateToProps = (state) => ({
//   hasError: getCategoriesError(state),
//   categories: getCategories(state),
//   isPending: getCategoriesPending(state),
// });

export default withRouter(connect(mapStateToProps)(Default));

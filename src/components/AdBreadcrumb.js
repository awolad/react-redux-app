import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdBreadcrumb = ({ data }) => (
  <>
    <div className="mt-3">
      <Breadcrumb>
        {data.map((breadcrumbItem, i) => (
          <li
            key={i}
            className={
              breadcrumbItem.active
                ? 'breadcrumb-item active'
                : 'breadcrumb-item'
            }
            aria-current="page"
          >
            {breadcrumbItem.active ? (
              <span className="active">{breadcrumbItem.text}</span>
            ) : (
              <Link to={breadcrumbItem.url}>{breadcrumbItem.text}</Link>
            )}
          </li>
        ))}
      </Breadcrumb>
    </div>
  </>
);

AdBreadcrumb.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdBreadcrumb;

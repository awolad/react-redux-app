import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AdBreadcrumb = ({ data }) => (
  <>
    <div className="mt-3">
      <Breadcrumb>
        {data.map((breadcrumbItem, i) => (
          // <Link></Link> need to use
          <Breadcrumb.Item
            href={breadcrumbItem.url}
            key={i}
            active={breadcrumbItem.active}
          >
            {breadcrumbItem.text}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  </>
);

AdBreadcrumb.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AdBreadcrumb;

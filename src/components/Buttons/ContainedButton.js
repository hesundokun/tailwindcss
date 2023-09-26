import React from 'react';
import PropTypes from 'prop-types';

import './containedbtn.scss';

function ContainedButton({ name, type }) {
    let classNames = 'default';

    if (type === 'primary') {
        classNames = 'primary';
    }

    return (
        <button className={`btn-container ${classNames}`}>
            {name}
        </button>
    );
}

ContainedButton.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default ContainedButton;
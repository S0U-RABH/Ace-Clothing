import React from 'react'
import './directory.style.scss';
import Menuitem from '../menu-item/menu-item.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ section }) => {

  return (
    <div className='directory-menu'>
      {
        section.map(({ id, ...otherSectionProps }) => (
          <Menuitem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections
})
export default connect(mapStateToProps)(Directory); 
let React = require('react');
let SvgIcon = require('../../svg-icon');

let ImageCrop32 = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/>
      </SvgIcon>
    );
  }

});

module.exports = ImageCrop32;
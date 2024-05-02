import React, { Component } from 'react'
import { connect } from 'react-redux'


export class pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          data: [],
          perPage: 5,
          currentPage: 0
    };
    }

  render() {
    return (
      <div>pagination</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(pagination)
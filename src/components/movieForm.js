import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class MovieForm extends Component {
    render() {
        return(
            <div className="movieForm">
                <form>
                    <input type="text" placeholder="Movie name"/>
                    <input type="text" placeholder="Search theaters"/>
                    <input type="date" placeholder="date"/>
                    <input type="submit" />      
                 </form>
            </div>
        );
    }
}

// const mapStateToProps = ({  }) => ({  });

// export default connect(mapStateToProps, null)(ComponentName);
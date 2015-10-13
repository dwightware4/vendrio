window.Index = React.createClass({
  render: function(){
    return(
        <ul>
          {this.state.benches.map(function(bench){
            return(
              <li key={bench.id}>
                {bench.description}, {bench.seating}
              </li>
            );
          })}
        </ul>
    )
  },

  getInitialState: function() {
    return {benches: BenchStore.all()};
  },

  componentDidMount: function(){
    BenchStore.addChangeListener(this._updateState);
  },

  _updateState: function(newBenches){
    this.setState({benches: BenchStore.all()});
  }
});

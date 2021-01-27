class IncreaseButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        };
        this.increaseNumber = this.increaseNumber.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
    increaseNumber(){
        this.state.clickCount = parseInt(this.state.clickCount)+1;
        this.setState(this.state);
    }
    resetCount(){
        this.state.clickCount = 0;
        this.setState(this.state);
    }
    render(){
        return <div>
            <button onClick={this.increaseNumber}>Click {this.state.clickCount}</button>
            <button onClick={this.resetCount} class="marginLeft20px">Reset</button>
        </div>
    }
}
ReactDOM.render(
    <div>
        <IncreaseButton></IncreaseButton>
    </div>
    , document.getElementById("exam1"));
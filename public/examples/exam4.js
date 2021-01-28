var fullLine = [["image/003-sakura.png","Xin chào bạn"],["image/004-sakura.png","Hello"],["image/005-sakura.png","Hi"]]
class Frame extends React.Component{
    constructor(props){
        super(props);
        this.myFrameState = {
            url: fullLine[this.props.line][0],
            text: fullLine[this.props.line][1]
        }
    }
    render(){
        return <div>
            <img src={this.myFrameState.url} className="imageFrame300" alt="image"></img>
            <p className="textAlignCenter">{this.myFrameState.text}</p>
        </div>
    }
}
class ListFrame extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Frame line="0"></Frame>
                        </td>
                        <td className="paddingLeft20px">
                            <Frame line="1"></Frame>
                        </td>
                        <td className="paddingLeft20px">
                            <Frame line="2"></Frame>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    }
}
ReactDOM.render(
    <div>
        <ListFrame></ListFrame>
    </div>
    ,document.getElementById("exam4")
);
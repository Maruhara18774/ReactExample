class ANote{
    constructor(header, content){
        this.header = header;
        this.content = content;
    }
}

class Note extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="note__Item">
            <h4>{this.props.header}</h4>
            <p>{this.props.content}</p>
        </div>
    }
}
var list = [new ANote("Hai","Cũng không có gì"), new ANote("Ba","Quan trọng")];
class List extends React.Component{
    constructor(props) {
        super(props);
        this.arrayState = {
            array = list
        }
    }
    render(){
        return <div>
            <Note header="Hey" content="Nothing"></Note>
            <Note header={this.arrayState.array[0].header} content={this.arrayState.array[0].content}></Note>
            <Note header={this.arrayState.arrayHeader[1]} content={this.arrayState.arrayContent[1]}></Note>
        </div>
    }
}
class InputNote extends React.Component {
    constructor(props) {
        super(props);
        this.saveNote = this.saveNote.bind(this)
    }
    saveNote() {

    }
    render() {
        return <div className="note__Input">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Tiêu đề: </p>
                        </td>
                        <td>
                            <input></input>
                        </td>
                        <td rowSpan="2">
                            <button className="marginLeft20px note__Button" onClick={this.saveNote}>Lưu</button>
                        </td>
                        <td rowSpan="2">
                            <button className="marginLeft20px note__Button">Thêm</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Nội dung:</p>
                        </td>
                        <td>
                            <input></input>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            
        </div>
    }
}

ReactDOM.render(
    <div className="note__Frame">
        <InputNote></InputNote>
        <List></List>
    </div>
    , document.getElementById("exam5")
);

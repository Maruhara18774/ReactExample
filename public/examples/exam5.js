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
var list;
class List extends React.Component{
    constructor(props) {
        super(props);
        this.arrayState = {
            coreArray : [new ANote("Hai","Cũng không có gì"), new ANote("Ba","Quan trọng")]
        }
        list = this;
    }
    render(){
        return <div>
            
            {
                this.arrayState.coreArray.map(function(note,index){
                    return <Note key= {index} header = {note.header} content = {note.content}></Note>
                })
            }
        </div>
    }
}
class InputNote extends React.Component {
    constructor(props) {
        super(props);
        this.saveNote = this.saveNote.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.txtHeaderRef = React.createRef();
        this.txtContentRef = React.createRef();
        this.hideInput = this.hideInput.bind(this);
    }
    saveNote() {
        alert("saved")
        
    }
    addNewNote(){
        var newNote = new ANote(this.txtHeaderRef.current.value,this.txtContentRef.current.value)
        // biến list tham chiếu đến class List
        list.arrayState.coreArray.push(newNote);
        list.setState(list);
    }
    hideInput(){
        ReactDOM.unmountComponentAtNode(document.getElementById("inputZone"));
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
                            <input type="text" ref={this.txtHeaderRef} placeholder="Nhập tiêu đề ..."></input>
                        </td>
                        <td>
                            <button className="marginLeft20px note__Button" onClick={this.saveNote}>Lưu</button>
                        </td>
                        <td rowSpan="2">
                            <button className="marginLeft20px note__Button" onClick={this.addNewNote}>Thêm</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Nội dung:</p>
                        </td>
                        <td>
                            <input type="text" ref={this.txtContentRef} placeholder="Nhập nội dung ..."></input>
                        </td>
                        <td>
                            <button className="marginLeft20px note__Button" onClick={this.hideInput}>Ẩn</button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            
        </div>
    }
}

ReactDOM.render(
    <div className="note__Frame">
        <div id="inputZone">
            <InputNote></InputNote>
        </div>
        
        <List></List>
    </div>
    , document.getElementById("exam5")
);

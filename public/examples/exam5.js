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
            coreArray : []
        }
        list = this;
        this.newTabInput = this.newTabInput.bind(this);
    }
    newTabInput(){
        ReactDOM.render(
            <InputNote></InputNote>
            ,document.getElementById("inputZone")
        )
    }
    render(){
        return <div>
            <div id="inputZone">
            
            </div>
            <button className="marginLeft20px note__Button" onClick={this.newTabInput}>Thêm</button>
            {
                this.arrayState.coreArray.map(function(note,index){
                    return <Note key= {index} header = {note.header} content = {note.content}></Note>
                })
            }
        </div>
    }
}
class AnotherList extends React.Component{
    constructor(props) {
        super(props);
        this.arrayState = {
            coreArray : []
        }
    }
    render(){
        return <div>
            <hr></hr>
            <h4>Tin nhắn lạ</h4>
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
        this.addNewNote = this.addNewNote.bind(this);
        this.txtHeaderRef = React.createRef();
        this.txtContentRef = React.createRef();
    }
    addNewNote(){
        var newNote = new ANote(this.txtHeaderRef.current.value,this.txtContentRef.current.value)
        // biến list tham chiếu đến class List
        list.arrayState.coreArray.push(newNote);
        list.setState(list);
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
                        <td rowSpan="2">
                            <button className="marginLeft20px note__Button" onClick={this.addNewNote}>Lưu</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Nội dung:</p>
                        </td>
                        <td>
                            <input type="text" ref={this.txtContentRef} placeholder="Nhập nội dung ..."></input>
                        </td>     
                    </tr>
                </tbody>
            </table>
            
        </div>
    }
}

ReactDOM.render(
    <div className="note__Frame">
        
        
        <List></List>
        <AnotherList></AnotherList>
    </div>
    , document.getElementById("exam5")
);

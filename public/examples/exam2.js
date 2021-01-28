var Album = {
    image1: "image/003-sakura.png",
    image2: "image/004-sakura.png",
    image3: "image/005-sakura.png",
    image4: "image/006-sakura.png",
    image5: "image/009-sakura.png",
    image6: "image/010-sakura.png",
    image7: "image/013-park.png",
    image8: "image/015-park.png",
    image9: "image/020-climb.png",
    image10: "image/022-dont shake.png"
}
class ImageManager extends React.Component{
    constructor(props){
        super(props);
        this.imageSrcState = {
            imageLink: Album["image1"],
            index: 1
        }
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPre = this.gotoPre.bind(this);
    }
    gotoNext(){
        if((this.imageSrcState.index+1)>10){
            this.imageSrcState.imageLink = Album["image1"];
            this.imageSrcState.index = 1;
        }
        else{
            var imageCode = "image"+(this.imageSrcState.index+1);
            this.imageSrcState.index++;
            this.imageSrcState.imageLink = Album[imageCode];
        }
        this.setState(this.imageSrcState);
    }
    gotoPre(){
        if((this.imageSrcState.index-1)== 0){
            this.imageSrcState.imageLink = Album["image10"];
            this.imageSrcState.index = 10;
        }
        else{
            var imageCode = "image"+(this.imageSrcState.index-1);
            this.imageSrcState.index--;
            this.imageSrcState.imageLink = Album[imageCode];
        }
        this.setState(this.imageSrcState);
    }
    render(){
        return <div>
            <img src={this.imageSrcState.imageLink} alt="image" className="imageFrame300"></img>
            <br></br>
            <button onClick={this.gotoPre}> Previous </button>
            <button className="marginLeft20px" onClick={this.gotoNext}> Next </button>
        </div>
    }
}
ReactDOM.render(
    <div>
        <ImageManager></ImageManager>
    </div>
    ,document.getElementById("exam2"));
import React, {Component} from "react";

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflop.com/1bij.jpg"
        };
    }
    
    componentDidMount () {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({allMemeImgs: memes});
        })
    }

    render () {
        return (
            <div>
                <form className="meme-form">
                    <input></input>
                    <button type="button">Generate</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator;
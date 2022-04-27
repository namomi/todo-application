import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(propos) {
        super(propos);
        this.state = { item: { title: "" }}; // 사용자의 입력을 저장할 오브젝트
        this.add = propos.add; // props의 함수를 this.add에 연결
    }

    onInputChage = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item); // add 함수 사용
        this.setState({ item: { title: "" } });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField 
                        placeholder="Add Todd here" 
                        fullWidth 
                        onChange={this.onInputChage }
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                <Grid xs={1} md={1} item>
                    <Button 
                    fullWidth 
                    color="secondary" 
                    variant="outlined"
                    onClick={this.onButtonClick}
                    >
                        +
                    </Button>
                </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;
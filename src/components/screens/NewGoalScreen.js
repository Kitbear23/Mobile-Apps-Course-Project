import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class NewGoalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
        type: value
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your Goal"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.type}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Miles" value="key0" />
              <Picker.Item label="Pictures Taken" value="key1" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
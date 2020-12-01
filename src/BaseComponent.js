import { Component } from "react";

export default class BaseComponent extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}
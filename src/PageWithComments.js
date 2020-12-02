import React from 'react';
import commentBox from 'commentbox.io';

export default class PageWithComments extends React.Component {
    componentDidMount() {
        this.removeCommentBox = commentBox('5712513450639360-proj', { defaultBoxId: this.props.articleId });
    }

    componentWillUnmount() {

        this.removeCommentBox()
    }

    render() {

        return (
            <div className="commentbox" />
        )
    }
}
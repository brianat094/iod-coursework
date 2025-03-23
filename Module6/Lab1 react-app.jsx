import React from 'react';
import ReactDOM from 'react-dom';

// Avatar component
function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}

// UserInfo component
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

// FormattedDate component
function FormattedDate(props) {
    return <div className="Comment-date">{props.date.toLocaleString()}</div>;
}

// Comment component
function Comment(props) {
    return (
        <div className="Comment componentBox">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <FormattedDate date={props.date} />
        </div>
    );
}

// ComplexComment component
function ComplexComment(props) {
    return (
        <div className="Comment componentBox">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <FormattedDate date={props.date} />
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

// Render the component, passing object data as props
ReactDOM.render(
    <ComplexComment author={comment.author} date={comment.date} text={comment.text} />,
    document.getElementById('root')
);1M 
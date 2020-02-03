import React from 'react';

class Form extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {username:'',repoName:''}
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onUsernameInput = this.onUsernameInput.bind(this);
        this.onReponameInput = this.onReponameInput.bind(this);
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.onFetch(this.state.username,this.state.repoName);
    }
    onUsernameInput(event)
    {
        this.setState({username:event.target.value})
    }
    onReponameInput(event)
    {
        this.setState({repoName:event.target.value})
    }
    render(){
        return (
            <div >
                <form className="form-container" onSubmit={this.onFormSubmit}>
                    <label htmlFor="username-field" > Username  </label>
                    <input id="username-field" value={this.state.username} type="text" onChange={this.onUsernameInput} placeholder="Github Username"/>
                    <label htmlFor="repo-field" > Repository Name  </label>
                    <input id="repo-field" value={this.state.repoName} type="text" onChange={this.onReponameInput} placeholder="Repository to fetch issues of..."/>
                    <button> Fetch Issues </button>                    
                </form>
            </div>
        );
    }
}

export default Form;
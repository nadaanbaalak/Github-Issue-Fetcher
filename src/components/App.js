import React from 'react';
import axios from 'axios';
import Form from './form';
import IssueList from './IssueList';
class App extends React.Component{
    constructor()
    {
        super();
        this.state = {issues:[]};
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    async onFormSubmit(username,reponame){
        try{
            const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}/issues`);
            //console.log(response.headers);
            this.setState({issues:response.data});
            console.log(this.state.issues)
        }
        catch(error)
        {
            console.log(error)
        }
    }
    //passing info from child component to parent component via props. Form(child)-->App(Parent)
    render(){
        return (
            <div className='secondary-container'>
                <Form onFetch={this.onFormSubmit}/>
                <IssueList issueList={this.state.issues}/>
            </div>
        );
    } 
}

export default App;
import React from 'react';

const IssueList = (props)=>{
    //console.log('Inside IssueList');
    const issues = props.issueList.map((issue)=>{
        return (
            <div key={issue.id} className="issue-card">
                <p><strong>Issue Title: </strong>{issue.title}</p>
                <p><strong>Created By : </strong>{issue.user["login"]}</p>
                <p><strong>Issue Description: </strong>{issue.body}</p>
            </div>
        )
            
    });
    
    return <div>{issues}</div>;
}

export default IssueList;
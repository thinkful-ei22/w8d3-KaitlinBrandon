import {SubmissionError} from 'redux-form';


export const complaint = values => {
    
    return fetch ('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(res => {
       if (!res.ok){
            if (
                res.headers.has('content-type') &&
                res.headers
                    .get('content-type')
                    .startsWith('application/json')
            ){
                return res.json().then(err => Promise.reject(err));
            }
            return Promise.reject({
                code: res.status,
                message: res.statusText
            });
        }
        return;
    })
    .then(() => console.log('Submitted with values', values))
    .catch(error => 
        Promise.reject(
            new SubmissionError({
                [error.location]: error.message
            })
        )
    );
};






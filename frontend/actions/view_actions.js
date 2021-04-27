import * as ViewsApiUtil from '../util/views_api_util';


export const createView = view => dispatch => {
    
    return ViewsApiUtil.createView(view).then(
        () => {return null},
        errors => { return errors}
    )
};

export const addView = view => dispatch => {
    
    return ViewsApiUtil.addView(view).then(
        () => { return null},
        errors => { return errors}
    )
};

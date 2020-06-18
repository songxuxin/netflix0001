const DATA = {
    'mylist': [
        {
            'title': 'Futurama',
            'id': 1,
            'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
            'title': 'The Interview',
            'id': 2,
            'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
            'title': 'Gilmore Girls',
            'id': 3,
            'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],
    'recommendations': [
        {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
    ]
}

const requestStart = () => {
    return {
        type: 'REQUEST_FETCHING'
    }
}

const requestSuccess = (res) => {
    return {
        type: 'REQUEST_FETCH_SUCCESS',
        data: res
    }
}

//mock data, we don't have error for now. This one will be add to real data.
const requestFail = (err) => {
    return {
        type: 'REQUEST_FETCH_FAIL',
        error: 'something wrong...'
    }
}

export const getLists = () => {
    return (dispatch) => {
        dispatch(requestStart());
        setTimeout(() => {
            dispatch(requestSuccess(DATA));
        },0)
    }
}

const removeOneMovie = (id) => {
    const data = DATA.mylist.filter( item => item.id !== id);
    DATA.mylist = data;
    return DATA;
}

export const removeMovie = (id) => {
    return (dispatch) => {
        dispatch(requestStart());
        setTimeout( () => {
            dispatch(requestSuccess(removeOneMovie(id)));
        },0)
    }
}

const addOneMovie = (id) => {
    const movie = DATA.recommendations.filter( item => item.id === id)[0];
    DATA.mylist.push(movie);

    DATA.recommendations = DATA.recommendations.filter( item => item.id !== id);
    return DATA;
}

export const addMovie = (id) => {
    return (dispatch) => {
        dispatch(requestStart());
        setTimeout(() => {
            dispatch(requestSuccess( addOneMovie(id) ));
        },0)
    }
}
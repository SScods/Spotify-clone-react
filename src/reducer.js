export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    //REMOVE after Finish developing.....
 //token: "BQA2qV6rrL1OdE3PTeSQ0gMGwIs0T9iUoei6fuwH5bf3YPbsRpTbSW4ZeVRzpxb6mWcL3w41vZBaMQYveadxQmSp6H2RzxgiT_W4c4CF_6nBDbKZOEwVExrQj-6xQ3yR3ui6xwgdfUBiKDYxJ1OjeqPMmi4_z3g",
};

const reducer = (state, action) => {
    console.log(action);


    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };

            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token,

                };

               case 'SET_PLAYLISTS':
                   return{
                       ...state,
                       playlists: action.playlists,
                   } ;
                   case 'SET_DISCOVER_WEEKLY':
                   return{
                       ...state,
                       discover_weekly:action.discover_weekly,
                   };

            default:
                return state;
    }

};   

export default reducer;
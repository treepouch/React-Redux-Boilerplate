




const initialState = [{id: 1, title: "Teen Mom", description: "To me, it’s Frank Ocean. He broke barriers in the R&B/hip hop world by discussing sexuality, has a wide range of touching music--both personal songs and statements about what’s going on in the world.", imageUrl: "http://mtv.mtvnimages.com/arc/images/shows/teen-mom-2/teen_mom2_08_020_sneak_mean_girls_still02.jpg?quality=0.85&width=200&height=200&crop=true"},
  			{id: 2, title: "Teen Wolf", description: "There’s no denying Drake has had an incredible career. From transitioning from a teen actor on Degrassi to solidifying his place in the music industry, he’s proved he can make bangers, he’s savvy enough to become a meme and make it work.", imageUrl: "http://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:650954?quality=0.85&width=200&height=200&crop=true"}]



/**

export const promoitem = (state = {}, action) => {
    switch (action.type) {
        case 'PROMO_UPDATE':
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    description: action.tier1items.description
                }
        default :
            return state
    }
}
**/

export const tier1promos = (state = initialState, action) => {


    switch (action.type) {
        case 'PROMO_UPDATE':
            return action.tier1items

            default :
            return state
            
    }
    
    
}




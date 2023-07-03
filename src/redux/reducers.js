
const initialState = {
    product: [],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GAT_PRODUCT":
            return {...state, product: action.payload}


        case "ADD_TO_BASKET" :
            let bas = state.basket.find(el => el.id === action.payload.id)
            if (bas) {
                return {...state, basket: state.basket.map(el => el.id === bas.id ? {...el, count: el.count + 1} : el)}
            } else {
                return {...state, basket: [...state.basket, {...action.payload, count: 1}]}

            }

        case "BASKET_DELETE":
            return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}


        case "ADD_TO_FAVORITE" :
            let fav = state.favorites.find(el => el.id === action.payload.id)
            if (fav) {
                return {...state, favorites: state.favorites.filter(el => el.id !== fav.id)}
            } else {
                return {...state, favorites: [...state.favorites, action.payload]}
            }
        case "DEC_BASKET" :
            return {...state, basket: state.basket.map((el) => {
                    if (el.id === action.payload.id && el.count > 1) {
                        return {...el, count: el.count - 1}
                    } else {
                        return el
                    }
                })
            }

        default:
            return state
    }
}


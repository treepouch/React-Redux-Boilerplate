




const initialState = [{url: "/", title: "Home"},
  			{url: "/news", title: "news"},
  			{url: "/about", title: "About"},
  			{url: "/videos", title: "Video"}]


const nav = (state = initialState, action) => {
    switch (action.type) {
        case 'NAV_UPDATE':
            return action.navItems;
            break;
    }
    
    return state;
}



export default nav

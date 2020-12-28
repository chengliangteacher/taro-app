export default {
    pages: [
        'pages/movie/movie',
        'pages/cinema/cinema',
        'pages/mine/mine',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: "black",
        selectedColor: "#e16531",
        backgroundColor: "#fff",
        list: [
            {
                pagePath: "pages/movie/movie",
                text: "电影",
                iconPath: "./image/movie.png",
                selectedIconPath: "./image/selected_movie.png"
            },
            {
                pagePath: "pages/cinema/cinema",
                text: "影院",
                iconPath: "./image/cinema.png",
                selectedIconPath: "./image/selected_cinema.png"
            },
            {
                pagePath: "pages/mine/mine",
                text: "我的",
                iconPath: "./image/mine.png",
                selectedIconPath: "./image/selected_mine.png"
            },
        ]
    }
}

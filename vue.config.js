module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // devServer: {
  //   proxy: 'http://localhost:8080/',

  // },
  devServer: {
    //port: 8080,
    proxy: "https://afternoon-waters-37189.herokuapp.com/api"
  }
}
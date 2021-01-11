const targetUrl = processENV=='development' ? 'http://192.168.3.17:8080':'';
const proxy = {
    '/api': {
        target: targetUrl,
        changeOrigin: true,
        pathRewrite:{
            '^/api': ''
        }
    }
}
export default proxy;
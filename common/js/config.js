let BASE_URL = ''
if(process.env.NODE_ENV === 'development'){
	BASE_URL = 'http:127.0.0.1:8080'
} else {
	BASE_URL = 'https://www.mengxuegu.com'
}
export default{
	BASE_URL
}
const globalNames = 
{
  APIURL : 'http://128.199.28.150:5000/api/',
  // APIURL : 'http://localhost:5000/api/',
  RAWURL : 'http://localhost:5000',
  userlogout : function logout(e){
    e.preventDefault();
    localStorage.clear();
    window.location.href='/login';
  },
  USERFILES : 'http://127.0.0.1:5000/userfiles/',
  PHARMACYFILES : 'http://127.0.0.1:5000/pharmacy-files/',
  DIAGNOSTICSFILES : 'http://127.0.0.1:5000/lab-tests/',
  BLOGFILES : 'http://127.0.0.1:5000/blog-files/',

  
}
export default globalNames;
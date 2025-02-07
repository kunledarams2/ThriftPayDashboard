
export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
      user = JSON.parse(userStr);
  
    if (user && user.token) {
      return {
        Authorization: 'Bearer ' + user.token,
        // 'Content-Type': 'text/plain',
        // "access-control-allow-origin": "*",
        'Content-Type': 'application/json',
        'operator': '',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, operator',

      };
    } else {
      return {
        Authorization: '', 
        // "access-control-allow-origin": "*",
        'Content-Type': 'application/json',
        'operator': '',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, operator',
      }
        ;
    }
  }
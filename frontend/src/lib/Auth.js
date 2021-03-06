import jwt from  'jsonwebtoken'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static setUserId(user) {
    localStorage.setItem('user', user)
  }

  static getUserId() {
    return localStorage.getItem('user')
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static removeToken() {
    localStorage.removeItem('token')
  }
  static removeUserId() {
    localStorage.removeItem('user')
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    const now = Math.round(Date.now() / 1000)
    return payload && now < payload.exp
  }

  static isCurrentUser(user) {
    const payload = this.getPayload()
    return payload && user._id === payload.sub
  }
}

export default Auth

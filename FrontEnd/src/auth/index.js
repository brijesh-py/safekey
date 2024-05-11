class Auth {
  constructor() {}

  async savePassword(data) {
    try {
      const response = await fetch("http://localhost:5000/save-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      return response;
    } catch (e) {
      return e;
    }
  }

  async getPasswords() {
    try {
      const response = await fetch("http://localhost:5000/get-passwords/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      return response;
    } catch (e) {
      return e;
    }
  }

  async getPassword(site_url) {
    try {
      const response = await fetch(
        `http://localhost:5000/get-password?query=${site_url}`
      ).then((res) => res.json());
      return response;
    } catch (e) {
      return e;
    }
  }

  async deletePassword(site_url) {
    try {
      const response = await fetch("http://localhost:5000/delete-password/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ site_url }),
      }).then((res) => res.json());
      return response;
    } catch (e) {
      return e;
    }
  }
}

const auth = new Auth();
export default auth;

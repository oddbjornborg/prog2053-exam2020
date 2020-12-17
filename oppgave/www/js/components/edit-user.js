import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render(){
      return html`
        <form class="form">
          <label for="uname">Username:</label>
          <input type="text" id ="uname" name="uname" value="${this.user.uname}"><br>
          <label for="firstName">First name:</label>
          <input type="text" id ="firstName" name="firstName" value="${this.user.firstName}"><br>
          <label for="lastName">Last name:</label>
          <input type="text" id ="lastName" name="lastName"  value="${this.user.lastName}"><br>
          <label for="oldpwd">Old password:</label>
          <input type="text" id ="oldpwd" name="oldpwd"><br>
          <label for="pwd">New password:</label>
          <input type="text" id ="pwd" name="pwd"><br>
          <button type="button" @click="${this.updateUser}">Oppdater</button>
        </form>
      `
  }

  updateUser(e){
    var newForm = new FormData(e.target.form)
    e.preventDefault()
    newForm.append("uid", this.user.uid)

    fetch("../api/updateUser.php", {
      method: "post",
      body: newForm
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

}
customElements.define('edit-user', EditUser);

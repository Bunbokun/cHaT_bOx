const components = {}

// lưu tất cả nội dung html
components.register = `
<section class="register-container">
  <form id="register-form" class="register-form">
    <div class="form-header">
      <h3>Chat Box</h3>
    </div>
    <div class="form-content">
      <div class="name-wrapper">
        <div class="input-wrapper">
          <input id="input-firstname" type="text" name="firstname" placeholder="Firstname">
          <div id="firstname-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" name="lastname" placeholder="Lastname">
          <div id="lastname-error" class="message-error"></div>
        </div>
      </div>
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="confirmPassword" placeholder="Confirm password">
        <div id="confirm-password-error" class="message-error"></div>
      </div>
    </div>
    <div id="register-error" class="message-error"></div>
    <div id="register-success" class="message-success"></div>
    <div class="form-footer">
      <a id="form-link" href="#">Already have an account? Login</a>
      <button id="register-btn" type="submit">Register</button>
    </div>
  </form>
</section>
`

components.logIn = `
<section class="log-in-container">
  <form id="log-in-form" class="log-in-form">
    <div class="form-header">
      <h3>Chat Box</h3>
    </div>
    <div class="form-content">
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="message-error"></div>
      </div>
    </div>
    <div id="log-in-error" class="message-error"></div>
    <div class="form-footer">
      <a id="form-link" href="#">Not yet have an account? Register</a>
      <button id="log-in-btn" type="submit">Log in</button>
    </div>
  </form>
</section>
`

components.nav = `
<nav class="main-nav">
  <div class="user-profile">
    <span id="user-name" data-toggle="modal" data-target="#exampleModal">linhnt28031995@gmail.com</span>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form id='change-user-infor-form'>
                <div class="modal-body card">
                    <div class="heros">
                      <img class="background" name='background'
                      src="https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=6bb26c224def312127d93e664ec5d03d"
                      alt=""
                      >
                    </div>
                    <div class="main-info">
                        <div class="user">
                            <img class="avatar" name='avatar' src="./img/cat.jpg" alt="">
                            <div class="user-details">
                                <h3 class="card-text" id="card-user-name">Hiếu Nguyễn</h3>
                                <br>
                                <h5 class="card-text" id="card-user-email">abctest@gmail.com</h5>
                            </div>
                        </div>
                        <div>
                            <div class="form-content">
                                <div class="name-wrapper">
                                    <div class="input-wrapper">
                                        <input id="change-firstname" type="text" name="firstname" placeholder="Firstname">
                                    </div>
                                    <div class="input-wrapper">
                                        <input id="change-lastname" type="text" name="lastname" placeholder="Lastname">
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <input id="change-email" type="email" name="email" placeholder="Email" disabled>
                                </div>
                                <hr>
                                <div style="margin-left: 40%;">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" id='btn-change-user-infor' class="btn btn-primary">Save changes</button>
                                </div>

                            </div>
                        </div>
                    </div>  
                </div>
              </form>  
            </div>
        </div>
    </div>

    <button id="sign-out-btn" class="btn-icon" data-toggle="tooltip" data-placement="bottom" title="Log out">
      <i class="fas fa-sign-out-alt"></i>
    </button>
  </div>
</nav>
`

components.chat = `
<section class="chat-container">
  <div class="aside-left">
    <div id="list-conversations" class="list-conversations">
    </div>
    <form id="form-add-conversation" class="form-add-conversation">
      <div class="input-wrapper">
        <input id="title-input" type="text" name="title" placeholder="Title">
        <div id="title-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input id="friend-email-input" type="email" name="friendEmail" placeholder="Enter your friend email..">
        <div id="friend-email-error" class="message-error"></div>
      </div>
      <button id="form-add-conversation-submit-btn" type="submit" class="btn-icon">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
  <div class="current-conversation">
    <div id="list-messages" class="list-messages">
    </div>
    <form id="form-chat" class="form-chat">
      <div class="input-wrapper">
        <input id="message-input" type="text" name="message" placeholder="Enter your message">
      </div>
      <button id="form-chat-btn" type="submit">Send</button>
    </form>
  </div>
  <div class="aside-right">
    <div class="details-current-conversation">
      <div id="list-users" class="list-users">
      </div>
      <div id="created-at" class="created-at"></div>
    </div>
    <br>
    <form id="form-add-new-member" class="form-add-new-member">
      <div class="input-wrapper">
        <input id="new-friend-email-input" type="email" name="newFriendEmail" placeholder="Enter your friend email..">
        <div id="new-friend-email-error" class="message-error"></div>
      </div>
      <button type="submit" id="add-new-member-btn" class="btn-icon" data-toggle="tooltip" data-placement="bottom" title="Add new member">
        <i class="fas fa-user-plus"></i>
      </button>
    </form>  
    <button type="button" id="leave-conversation-btn" class="btn-icon" data-toggle="tooltip" data-placement="bottom" title="Leave conversation">
      <i class="fas fa-minus"></i>
    </button>
  </div>
</section>
`
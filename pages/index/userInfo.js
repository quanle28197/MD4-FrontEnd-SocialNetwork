let currentUser = JSON.parse(localStorage.getItem("currentUser")) ;
function showAllUserInfo() {
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/userInfo/',
        // headers : {
        //     "Authorization" : 'Bearer ' + currentUser.token
        // },
        success : function (data) {
            let array = data.content;
            let content = '';
            let content1 = '';
            for (let i = 0; i < array.length; i++) {
                if (currentUser.id != array[i].user.id) {
                content += `<li>
                                      <div class="nearly-pepls">
                                                <figure>
                                                    <a href="time-line.html" title=""><img src="http://localhost:8080/image/${array[i].avatar}"></a>
                                                </figure>
                                                <div class="pepl-info">
                                                    <h4><a href="time-line.html" title="">${array[i].fullName}</a></h4>
                                            
                                                   <a href="#" title="" class="add-butn" data-ripple="">Kết bạn</a>
                                                </div>
                                            </div>
                                        </li> <br>`
                    content1 += `  <li>
                                                <figure><img src="http://localhost:8080/image/${array[i].avatar}"></figure>
                                                <div class="friend-meta">
                                                    <h4><a href="time-line.html" title="">${array[i].fullName}</a></h4>
                                                    <a href="#" title="" class="underline">Kết bạn</a>
                                                </div>
                                            </li>`

            }
            }
            $(`#listUser`).html(content);
            $(`#listfriends`).html(content1);
        },
    })
}
function showUserDetails() {
    $.ajax({
        type : 'GET',
        url : `http://localhost:8080/userInfo/${currentUser.id}`,
        success : function (data) {
            let fullName = `<p>${data.fullName}</p>`
            let avartar = `<img style="border-radius: 50%" src="http://localhost:8080/${data.avatar}" alt="avatar"/>`
            let backGround = `<img src="http://localhost:8080/${data.backGround}" width="45" height="45" alt=""/>`
            $(`#showUsername`).html(fullName);
            $(`#avatar`).html(avartar);
        }
    })
}
$(document).ready(function () {
    if (currentUser != null) {
        showUserDetails()
        showAllUserInfo();
    } else {
        location.href = '/module4-casestudy-frontend/pages/auth/login.html'
    }
})

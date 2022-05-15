// Hiển thị tất cả comment trong bài post
function showAllComments() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/comments/",
        success: function (data) {
            let bookList = '<tr>\n' +
                '        <th>Author</th>\n' +
                '        <th>Name</th>\n' +
                '        <th>Price</th>\n' +
                '        <th>Category</th>\n' +
                '        <th>Image</th>\n' +
                '        <th>Action</th>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                bookList += getBook(data[i]);
            }
            document.getElementById("bookList").innerHTML = bookList;
        }
    })
}

// Write a new comment
function writeComment() {

}
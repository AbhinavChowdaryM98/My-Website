var arr = ["https://play-lh.googleusercontent.com/zZ0eKkHZQofg3YI7NpMy2CV6zHHO9HKmyXEvVh40PDVEcelqAzGVi0yr5CljPOhNILRS", "https://directory.edugorilla.com/wp-content/uploads/sites/6/2016/01/nnnn.jpg", "https://www.iiit.ac.in/img/iiit-new.png"]

var a = 0

function changeimage() {
    a+=1;
    a = a%3;
    document.getElementById("education").src = arr[a];
}
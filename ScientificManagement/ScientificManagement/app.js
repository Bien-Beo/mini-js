var courseAPI = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start();

//Handle Functions
function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseAPI, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`${courseAPI}/${id}`, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function updateCourse(data, id) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(`${courseAPI}/${id}`, options)
        .then(function(response) {
            response.json();
        })
        .then(function(course) {
            document.querySelector(`.course-id-${id}`).innerHTML = `
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick = "handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick = "handleUpdateCourse(${course.id})">Chỉnh sửa</button>
            `;
        })
}

function handleUpdateCourse(id) {
    var createBtn = document.querySelector('#create');
    createBtn.style.display = "none";
    var updateBtn = document.querySelector('#update');
    updateBtn.style.display = "block";

    var courseItem = document.querySelector(`.course-item-${id}`);
    var nameInput = courseItem.querySelector('h4').innerText;
    var desInput = courseItem.querySelector('p').innerText;

    var name = document.querySelector('input[name="name"]');
    var des = document.querySelector('input[name="description"]');
    name.value = nameInput;
    des.value = desInput;

    updateBtn.onclick = function() {
        var dataForm = {
            name: name.value,
            description: des.value
        };
        updateCourse(dataForm, id);
    }
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleUpdateCourse(${course.id})">Chỉnh sửa</button>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    }
}
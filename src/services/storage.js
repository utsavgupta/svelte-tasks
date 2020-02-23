export function saveTasks(tasks) {
    if (Array.isArray(tasks)) {
        let jsonTasks = JSON.stringify(tasks)
        document.cookie = "notes="+jsonTasks
    }
}

export function loadTasks() {
    let jsonTasks=getCookie("notes")

    let tasks = Array()

    if (typeof(jsonTasks) === "string") {
        try {
            tasks = JSON.parse(jsonTasks)
        } catch (e) {
            tasks = Array()
        }
    }

    if (Array.isArray(tasks)) {
        return tasks
    } else {
        return []
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
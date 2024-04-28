document.addEventListener('DOMContentLoaded', function () {
    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const editTaskForm = document.getElementById('editTaskForm');
    const editTaskId = document.getElementById('editTaskId');
    const editTaskTitle = document.getElementById('editTaskTitle');
    const editTaskDescription = document.getElementById('editTaskDescription');
    const editStartDate = document.getElementById('editStartDate');
    const editClientName = document.getElementById('editClientName');
    const editProjectId = document.getElementById('editProjectId');
    const editComments = document.getElementById('editComments');
    const editStatus = document.getElementById('editStatus');
    const updateTaskBtn = document.getElementById('updateTaskBtn');
    const filterStatus = document.getElementById('filterStatus');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const newCommentInput = document.getElementById('newComment');

    try {
        filterStatus.addEventListener('change', function () {
            const selectedStatus = filterStatus.value;
            const taskRows = document.querySelectorAll('#taskTable tbody tr');

            taskRows.forEach(function (row) {
                const taskStatus = row.cells[7].textContent;
                if (selectedStatus === 'Todos' || taskStatus === selectedStatus) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });

        updateTaskBtn.addEventListener('click', function () {
            const taskId = editTaskId.value.trim();
            const taskTitle = editTaskTitle.value.trim();
            const taskDescription = editTaskDescription.value.trim();
            const startDate = editStartDate.value;
            const clientName = editClientName.value.trim();
            const projectId = editProjectId.value.trim();
            const comments = editComments.value.trim();
            const status = editStatus.value;

            alert('¡Tarea actualizada exitosamente!');

            const taskRow = document.querySelector(`#taskTable tr[data-task-id="${taskId}"]`);
            if (taskRow) {
                taskRow.cells[1].textContent = taskTitle;
                taskRow.cells[2].textContent = taskDescription;
                taskRow.cells[3].textContent = startDate;
                taskRow.cells[4].textContent = clientName;
                taskRow.cells[5].textContent = projectId;
                taskRow.cells[6].textContent = comments;
                taskRow.cells[7].textContent = status;
            }
        });

        addCommentBtn.addEventListener('click', function () {
            const newComment = newCommentInput.value.trim();
            if (newComment !== '') {
                const currentDate = new Date().toLocaleString();
                const existingComments = editComments.value.trim();
                const updatedComments = `${currentDate}: ${newComment}\n${existingComments}`;
                editComments.value = updatedComments;
                newCommentInput.value = '';
            }
        });
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
});

const myApp = new Vue({
    el: '#app',
    data: {
        slides: slides,
        newTask: ''
    },
    methods: {
        addNewTask() {
            if (this.newTask !== '') {
                const newTaskObj = {

                }

                newTaskObj.text = this.newTask;
                newTaskObj.done = false;

                this.slides.push(newTaskObj);
                this.newTask = '';
            }
        },

        removeTask(index) {
            this.slides.splice(index, 1);
        },

        markAsDone(index) {
            if (this.slides[index].done === false) {
                this.slides[index].done = true;
            } else {
                this.slides[index].done = false;
            }

        }
    }
});

console.log(myApp.slides)
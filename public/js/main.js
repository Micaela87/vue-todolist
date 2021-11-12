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
            }
        },

        removeTask(index) {
            this.slides.splice(index, 1);
        },

        markAsDone(index) {
            this.slides[index].done = true;
        }
    }
});

console.log(myApp.slides)
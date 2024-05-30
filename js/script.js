const { createApp } = Vue

createApp({
    data() {
        return {
            tooDoList: [
                {
                    text: "Pane",
                    done: false,
                },
                {
                    text: "Latte",
                    done: false,
                },
                {
                    text: "Pasta",
                    done: false,
                },
                {
                    text: "Pizza",
                    done: false,
                },
            ]
        }
    }
}).mount('#app')
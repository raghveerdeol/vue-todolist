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
    },
    methods: {
        cancelItem: function (itemIndex) {
            itemIndex.done = !itemIndex.done;
        },
        deleteItem: function(itemIndex) {
            this.tooDoList.splice(itemIndex, 1);
        }
    }
}).mount('#app')
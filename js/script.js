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
            ],
            newItem: '',
        }
    },
    methods: {
        cancelItem: function (itemIndex) {
            itemIndex.done = !itemIndex.done;
        },
        deleteItem: function(itemIndex) {
            this.tooDoList.splice(itemIndex, 1);
        },
        addNewItem: function (item) {
            const array = {
                text: item,
                done: false,
            };
            this.tooDoList.push(array);
        }
    }
}).mount('#app')
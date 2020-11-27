var vm = Vue.createApp({
    data() {
        return {
            id: '',
            name: '',
            mc: '',
            brandlist: [
                {
                    id: 1,
                    name: "奔驰",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 2,
                    name: "宝马",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 3,
                    name: "长安奔奔",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 4,
                    name: "千里马",
                    ctime: new Date().toLocaleDateString(),
                },
            ],
        }
    },
    methods: {
        add() {
            if (!(this.id && this.name)) return alert('空')
            var arr = {
                id: this.id,
                name: this.name,
                ctime: new Date().toLocaleDateString()
            }

            this.brandlist.push(arr)
            console.log(arr);
            this.id = this.name = ''
        },
        search() {
            var msg = this.brandlist.filter(item => item.name.includes(this.mc))
            return msg` `
        },
        remove(index) {
            console.log(index);
            // var index = this.brandlist.findIndex(item => item.id == id)
            // console.log(index);
            this.brandlist.splice(index, 1)
            // this.mc = '';
            // console.log(222);

        }
    }
}).mount('#app')
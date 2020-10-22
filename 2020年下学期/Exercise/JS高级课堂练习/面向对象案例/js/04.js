var that;
class Tab {
    constructor(id) {
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')


        this.ul = this.main.querySelector('.fisrstnav ul:first-child')

        this.tabscon = this.main.querySelector('.tabscon')
        // console.log(this.ul, this.sections)
        this.init()
    }

    //初始化
    init() {
        this.updatanode()
        this.add.onclick = this.addTab
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            console.log(i);
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.span[i].ondblclick = this.editTab


        }
    }
    //重新获取元素
    updatanode() {
        this.lis = document.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.span = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    //清除样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = ''
        }
    }
    //1.切换
    toggleTab() {
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    //2.添加
    addTab() {
        // console.log(11)
        var randen = Math.random()
        that.clearClass()
        //1.创建
        var li = ' <li class="liactive"><span>新房</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">' + randen + '</section>'
        //插入
        // console.log(that.ul.insertAdjacentHTML());
        that.ul.insertAdjacentHTML('beforeend', li);

        that.tabscon.insertAdjacentHTML('beforeend', section)
        that.init()
    }

    // 3.删除
    removeTab(e) {
        e.stopPropagation()
        var index = this.parentNode.index
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        if (document.querySelector('.liactive')) return
        index--
        that.lis[index] && that.lis[index].click()
    }
    //4.修改
    editTab() {
        var str = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>'
        var input = this.children[0]
        input.value = str
        input.select()
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }

        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur()
            }
        }

    }
} new Tab('#tab')
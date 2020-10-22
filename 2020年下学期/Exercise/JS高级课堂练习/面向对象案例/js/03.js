var that;
class Tab {
    constructor(id) {
        that = this
        // console.log(that);
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.fection = this.main.querySelector('.tabscon')
        this.init()
    }
    // 初始化
    init() {
        this.updatanode()
        this.add.onclick = this.addTab
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.span[i].ondblclick = this.editTab

        }
    }
    // 清除样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    // 动态添加元素 重新和获取li和section
    updatanode() {
        
        this.lis = document.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.span = this.main.querySelectorAll('.fisrstnav li span:first-child')

    }

    // 1.切换
    toggleTab() {
        that.clearClass()
        this.className = 'liactive'
        // console.log(this);
        // that.sections[this.index].className = 'conactive';
        that.sections[this.index].className = 'conactive';
    }
    //2.添加
    addTab() {
        that.clearClass()
        var random = Math.random()
        //1.创建元素
        var li = ' <li class="liactive"><span>新的</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">' + random + '</section>'
        //2.把元素插入相对应的父元素里面

        that.ul.insertAdjacentHTML('beforeend', li)
        if (document.querySelector('.liactive'))
            that.fection.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    //3.删除
    removeTab(e) {
        e.stopPropagation()  //阻止冒泡 
        var index = this.parentNode.index
        // console.log(index);
        that.lis[index].remove()
        that.sections[index].remove()
        that.init();

        if (document.querySelector('.liactive')) return
        index--
        that.lis[index] && that.lis[index].click()
    }
    //4.编辑
    editTab() {
        var str = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '  <input type="text"/>'
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
}

new Tab('#tab')
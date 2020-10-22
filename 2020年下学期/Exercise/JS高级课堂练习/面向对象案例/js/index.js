var that;
class Tab {

    constructor(id) {
        //1.获取元素
        that = this;
        this.main = document.querySelector(id)
        
        this.add = this.main.querySelector('.tabadd')

        //li的父元素

        // this.ul = this.main.querySelector('.fisrstnav ul:first-chlid')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        //section的父元素
        this.fsection = this.main.querySelector('.tabscon')
        this.init()
    }
    // 动态添加元素 需要重新获取新的li和section
    updatanode() {
        this.lis = document.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child ')
    }

    init() {
        this.updatanode()
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;


        }
    }

    //1.切换功能
    toggleTab() {
        // console.log(this.index);
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive';
    }

    // 清除所有的li和section
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';

        }
    }
    //2.添加功能
    addTab() {
        that.clearClass()
        // that.updatanode()
        // console.log('kgjdkj');
        //1.创建li元素和section元素
        var random = Math.random()
        var li = ' <li class="liactive"><span>新的选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">测试 ' + random + '</section>'
        //2.把这两个元素追加到对应的父元素里面

        that.ul.insertAdjacentHTML('beforeend', li);

        // that.fsection.insertAdjacentHTML('beforeend', section)
        if (document.querySelector('.liactive'))
            that.fsection.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    //3.删除功能
    removeTab(e) {
        e.stopPropagation()//阻止冒泡 防止触发li的切换点击事件
        var index = this.parentNode.index;
        console.log(index);

        //根据索引号删除对应的li和section  remove()可以直接删除对应的元素
        that.lis[index].remove();
        that.sections[index].remove()
        that.init();
        // 当我删除的不是选中状态的li的时候，原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return
        index--;
        that.lis[index] && that.lis[index].click();

    }
    //4.修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        console.log(44);
        // this.innerHTML = '<input type="text" />';
        this.innerHTML = '<input type="text"/>'
        var input = this.children[0];
        input.value = str;
        input.select()//文本框的里面的文字处于选定的状态

        //当我们离开文本框的时候就把文本框的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }

        //按下回车也可以把文本框的里面的值给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                //手动调用表单 失去焦点事件 不需要鼠标离开操作
                this.blur()
            }
        }

    }
}

new Tab('#tab')

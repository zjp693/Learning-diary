$(function () {
    //#region 1.更新用户信息
    $('#savebtn').on('click', function () {
        console.log(11111);

        let formData = $('#editfrom').serialize();
        console.log(formData);

        // console.log(req.body);
        // $.ajax({
        //     type: 'PUT',
        //     url: '/edit/edit',
        //     contentType: false,
        //     processData: false,
        //     data: $form.serialize(),
        //     success: function (results) {
        //         console.log(results);
        //         if (results.code == 200) {
        //             location.href = "/"
        //         }
        //     }
        // })


        $.ajax({
            type: "PUT",
            url: "/edit/edit/",
            data: formData,
            
            success: function (results) {
                // 回显错误信息
                console.log(results);
                if (results.code == 200) {
                    location.href = '/'
                }
            }
        })

    })
    //#endregion
})
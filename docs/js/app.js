App = {
    init: function () {
        console.log('App.init');
    },
    sendMessage: function () {
        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        console.log(fullName, email, subject, message);
        axios.post('https://sheetdb.io/api/v1/e2wnef5hqujpp',
            {
                "data": { "Name": fullName, "Email": email, "Subject": subject, "Message": message , "Date" : new Date() }
            },
            {
                "auth": { username: "75a16hna", password: "fxykqst5w96tjq99rntb" }
            })
            .then(response => {
                console.log(response.data);
                $('form').trigger('reset')
                window.location.assign(window.location.href);
            })
            .catch(error => { console.log("errored", error); });
    }

}

$(function () {
    $(window).load(function () {
        App.init();
    })
});
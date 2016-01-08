$('a.delete').confirm({
    message: 'Are you sure?',
    onConfirm: function() {
        console.log(this, 'yes!');
    },
    onReject: function() {
        console.log('no!');
    }
});
var nodes = document.getElementsByTagName('button');
console.log(nodes);

for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click',
        function (i) {
            return function () {
                console.log('You clicked element #' + i);
            }
        }(i)
    );
}


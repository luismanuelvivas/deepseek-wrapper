document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    header.innerHTML = '<header class="bg-gradient-to-r from-purple-800 to-gray-900 text-white p-4 shadow-md">' +
        '<div class="container mx-auto flex justify-between items-center">' +
            '<div class="text-xl font-bold">' +
                '<span class="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Deep</span>' +
                '<span class="text-white">Code</span>' +
                '<span class="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">X</span>' +
                '<span class="text-white"> mini</span>' +
            '</div>' +
            '<nav>' +
                '<ul class="flex space-x-6">' +
                    '<li><a href="index.html" class="hover:text-gray-300">Chat & Code</a></li>' +
                    '<li><a href="analisis.html" class="hover:text-gray-300">Analysis Code</a></li>' +
                    '<li><a href="debug.html" class="hover:text-gray-300">Code Debug</a></li>' +
                '</ul>' +
            '</nav>' +
        '</div>' +
    '</header>';
});
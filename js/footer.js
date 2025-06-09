document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<footer class="bg-gradient-to-r from-purple-900 via-purple-800 to-black text-white p-6 mt-12 border-t border-gray-700">' +
        '<div class="container mx-auto px-4">' +
            '<div class="flex flex-col justify-center items-center">' +
                '<div class="text-center">' +
                    '<p class="text-sm md:text-base">&copy; 2023 DeepCodeX mini. All rights reserved.</p>' +
                    '<p class="text-xs text-gray-400 mt-1">Built with ❤️ for the community</p>' +
                '</div>' +
            '</div>' +
            '<div class="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">' +
                '<p>Version 1.0.0 | Last updated: June 2023</p>' +
            '</div>' +
        '</div>' +
    '</footer>';
});
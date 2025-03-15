document.addEventListener("DOMContentLoaded", function () {
    const toggleSections = document.querySelectorAll(".toggle-section");

    toggleSections.forEach(section => {
        const title = section.querySelector(".toggle-title");
        const content = section.querySelector(".toggle-content");

        title.addEventListener("click", function () {
            // Ẩn tất cả các mục khác nếu muốn
            toggleSections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.querySelector(".toggle-content").style.display = "none";
                }
            });

            // Hiện hoặc ẩn phần nội dung khi click vào tiêu đề
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
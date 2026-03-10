// GearInsights 中央控制台 - 类别文章统计
// 以后每次写完新文章，只需要在这里修改数字即可！

const categoryCounts = {
    footwear: 1,      // 徒步鞋的文章数
    backpacks: 1,     // 背包的文章数
    photography: 1,   // 摄影器材的文章数
    guides: 2         // 指南类的文章数
};

// 页面加载完成后，自动把数字填入对应的 HTML 标签中
document.addEventListener('DOMContentLoaded', () => {
    
    const footwearElement = document.getElementById('count-footwear');
    if (footwearElement) footwearElement.textContent = categoryCounts.footwear;

    const backpacksElement = document.getElementById('count-backpacks');
    if (backpacksElement) backpacksElement.textContent = categoryCounts.backpacks;

    const photoElement = document.getElementById('count-photo');
    if (photoElement) photoElement.textContent = categoryCounts.photography;
    
});

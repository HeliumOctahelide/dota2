function drawCanvas(v) {
    const BACKGROUND_COLOR = "#fff0cd";
    const COLOR = "#591804";
    const FULL_WIDTH = 650;
    const FULL_HEIGHT = 120;
    let c = document.getElementById("mycanvas").getContext("2d");
    console.log(1);
    c.fillStyle = COLOR;
    c.fillRect(0, 0, FULL_WIDTH, FULL_HEIGHT);
    c.fillStyle = BACKGROUND_COLOR;
    c.fillRect(5, 5, FULL_WIDTH - 10, FULL_HEIGHT - 10);
    c.font = "20px 黑体";
    c.fillStyle = COLOR;
    c.fillText(v.nga_name + "@BBS.NGA.CN", 16, 30)
    c.font = "10px Georgia";
    c.fillText("dota2id: " + v.steam_id, 16, 45);
    c.font = "10px 等线";
    c.fillText("· 常用英雄 --------------------------------------", 16, 60)
    c.drawImage(v.pic1, 16, 65);
    c.drawImage(v.pic2, 96, 65);
    c.drawImage(v.pic3, 176, 65);
    c.textAlign = "center";
    c.font = "18px Georgia";
    c.fillText(v.matches, 305, 26);
    c.fillText(((v.kpp + v.app) / v.dpp).toFixed(2), 375, 26);
    c.fillText(toPercent(v.winrate), 445, 26);
    c.fillText(toPercent(v.rankwinrate), 515, 26);
    c.font = "12px 等线";
    c.fillText("场次", 305, 42);
    c.fillText("KDA", 375, 42);
    c.fillText("总胜率", 445, 42);
    c.fillText("天梯胜率", 515, 42);
    c.fillText(`场均击杀: ${v.kpp.toFixed(2)}    场均死亡: ${v.dpp.toFixed(2)}    场均助攻: ${v.app.toFixed(2)}`, 410, 64);
    c.fillText(`近100局：${v.details.recent.normal} 普通匹配 / ${v.details.recent.rank} 天梯匹配 / ${v.details.recent.others} 其他模式`, 410, 105);
    c.strokeStyle = COLOR;
    c.lineWidth = 1;
    // 290 to 530 (240px)
    c.fillStyle = "blue";
    c.fillRect(290, 80, 2.4*v.details.recent.normal, 10);
    c.fillStyle = "red";
    c.fillRect(290+2.4*v.details.recent.normal, 80, 2.4*v.details.recent.rank, 10);
    c.fillStyle = "green";
    c.fillRect(290+2.4*v.details.recent.normal+2.4*v.details.recent.rank, 80, 2.4*v.details.recent.others, 10);
    c.strokeRect(290, 80, 240, 10);
    c.drawImage(v.pic4, 550, 20);
    c.drawImage(v.pic5, 550, 20);
}
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      leftSidebarItem: {
        leftSidebarItem_0: false,
        leftSidebarItem_1: false,
        leftSidebarItem_2: false,
        leftSidebarItem_3: false,
        leftSidebarItem_4: false,
        leftSidebarItem_5: false,
        leftSidebarItem_6: false,
        leftSidebarItem_7: false,
        leftSidebarItem_8: false,
        leftSidebarItem_9: false,
        leftSidebarItem_10: false,
        leftSidebarItem_11: false,
        leftSidebarItem_12: false,
        leftSidebarItem_13: false,
        leftSidebarItem_14: false,
      },
      leftSidebarItemDetail: {
        // 每一行数据：
        // {
        // 1、标题
        //   title: "童书",
        // 2、小链接
        //   links: [
        //     {
        //       name: "", 1.名称
        //       url: "#", 2.链接
        //       mode: "", 3.class类型，red为默认红色，no-sep为没有分界线，red-no-sep为默认红色且无分界线
        //     },
        //   ],
        // },
        Detail_0: [
          {
            title: "排行榜",
            links: [
              {
                name: "图书畅销榜 >>",
                url: "#",
                mode: "red-no-sep",
              },
              {
                name: "新书热卖榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "童书榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "热搜榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "好评榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "飙升榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "特价榜 >>",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "童书",
            links: [
              {
                name: "0-2岁",
                url: "#",
              },
              {
                name: "3-6岁",
                url: "#",
                mode: "red",
              },
              {
                name: "7-10岁",
                url: "#",
                mode: "red",
              },
              {
                name: "11-14岁",
                url: "#",
              },
              {
                name: "绘本",
                url: "#",
                mode: "red",
              },
              {
                name: "中国儿童文学",
                url: "#",
              },
              {
                name: "外国儿童文学",
                url: "#",
              },
              {
                name: "科普/百科",
                url: "#",
              },
              {
                name: "婴儿读物",
                url: "#",
              },
              {
                name: "益智游戏",
                url: "#",
              },
              {
                name: "玩具书",
                url: "#",
              },
              {
                name: "动漫/卡通",
                url: "#",
              },
              {
                name: "少儿英语",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "进口儿童书",
                url: "#",
              },
              {
                name: "少儿期刊",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "教育",
            links: [
              {
                name: "中小学用书",
                url: "#",
                mode: "red",
              },
              {
                name: "考试",
                url: "#",
              },
              {
                name: "大中专教材",
                url: "#",
              },
              {
                name: "外语工具书",
                url: "#",
              },
              {
                name: "教师用书",
                url: "#",
              },
              {
                name: "新概念",
                url: "#",
              },
              {
                name: "中小学阅读",
                url: "#",
              },
              {
                name: "英语四级",
                url: "#",
                mode: "red",
              },
              {
                name: "英语六级",
                url: "#",
              },
              {
                name: "考研",
                url: "#",
                mode: "red",
              },
              {
                name: "公务员",
                url: "#",
              },
              {
                name: "教师资格考试",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "文艺",
            links: [
              {
                name: "小说",
                url: "#",
                mode: "red",
              },
              {
                name: "文学",
                url: "#",
              },
              {
                name: "传记",
                url: "#",
              },
              {
                name: "青春文学",
                url: "#",
              },
              {
                name: "动漫/幽默",
                url: "#",
              },
              {
                name: "艺术",
                url: "#",
              },
              {
                name: "摄影",
                url: "#",
              },
              {
                name: "偶像明星",
                url: "#",
              },
              {
                name: "涂色/填色",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "人文社科",
            links: [
              { name: "哲学宗教", url: "#" },
              { name: "历史", url: "#", mode: "red" },
              { name: "政治军事", url: "#" },
              { name: "文化", url: "#" },
              { name: "社会科学", url: "#" },
              { name: "心理学", url: "#" },
              { name: "古籍", url: "#" },
              { name: "法律", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "励志",
            links: [
              { name: "励志/成功", url: "#", mode: "red" },
              { name: "心灵修养", url: "#" },
              { name: "职场", url: "#" },
              { name: "人生哲学", url: "#" },
              { name: "人际交往", url: "#" },
              { name: "口才/演讲/辩论", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "生活",
            links: [
              { name: "两性", url: "#" },
              { name: "孕期", url: "#" },
              { name: "育儿", url: "#" },
              { name: "亲子家教", url: "#" },
              { name: "保健", url: "#" },
              { name: "运动", url: "#" },
              { name: "休闲", url: "#" },
              { name: "旅游", url: "#" },
              { name: "美食", url: "#", mode: "red" },
              { name: "美妆", url: "#" },
              { name: "手工DIY", url: "#" },
              { name: "家庭家居", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "经管",
            links: [
              { name: "经济", url: "#" },
              { name: "管理", url: "#" },
              { name: "投资理财", url: "#" },
              { name: "股票", url: "#" },
              { name: "金融", url: "#" },
              { name: "市场/销售", url: "#" },
              { name: "会计", url: "#", mode: "red" },
              { name: "互联网", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "科技",
            links: [
              { name: "科普读物", url: "#" },
              { name: "计算机/网络", url: "#" },
              { name: "医学", url: "#" },
              { name: "工业技术", url: "#" },
              { name: "建筑", url: "#" },
              { name: "自然科学", url: "#" },
              { name: "农业/林业", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "当当出版",
            links: [
              { name: "小说", url: "#" },
              { name: "文学", url: "#" },
              { name: "社科", url: "#" },
              { name: "外语", url: "#" },
              { name: "教辅", url: "#" },
              { name: "艺术", url: "#" },
              { name: "童书", url: "#" },
              { name: "青春文学", url: "#" },
              { name: "生活", url: "#" },
              { name: "励志", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "期刊/进口书",
            links: [
              { name: "英文图书", url: "#" },
              { name: "港台图书", url: "#" },
              { name: "日文图书", url: "#" },
              { name: "法文图书", url: "#" },
              { name: "韩文图书", url: "#" },
              { name: "其他语种", url: "#" },
              { name: "杂志", url: "#" },
              { name: "英文原版小说", url: "#" },
              { name: "进口艺术画册", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "音像",
            mode: "no-border",
            links: [
              { name: "音乐", url: "#" },
              { name: "影视", url: "#" },
              { name: "软件", url: "#" },
              { name: "游戏", url: "#" },
              { name: "教育音像", url: "#" },
              { name: "华语流行", url: "#" },
              { name: "儿童音乐", url: "#" },
              { name: "动画片", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_1: [
          {
            title: "阅读器",
            links: [
              { name: "新锐版", url: "#", mode: "red" },
              { name: "Light（高清版）", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "排行榜",
            links: [
              { name: "畅销总榜", url: "#" },
              { name: "新书榜", url: "#" },
              { name: "文艺小说榜", url: "#" },
              { name: "经管励志榜", url: "#" },
              { name: "社科历史榜", url: "#" },
              { name: "科教榜", url: "#" },
              { name: "生活榜", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "特价",
            links: [
              { name: "免费书", url: "#" },
              { name: "特价书", url: "#" },
              { name: "限时抢", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "小说",
            links: [
              { name: "侦探/悬疑/推理", url: "#" },
              { name: "玄幻/惊悚", url: "#" },
              { name: "中国近当代小说", url: "#" },
              { name: "中国古典小说", url: "#" },
              { name: "武侠小说", url: "#" },
              { name: "外国小说", url: "#" },
              { name: "穿越/言情", url: "#" },
              { name: "爱情/情感", url: "#" },
              { name: "影视/娱乐", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "文艺",
            links: [
              { name: "传记", url: "#" },
              { name: "文学评论与鉴赏", url: "#" },
              { name: "随笔", url: "#" },
              { name: "文学作品集", url: "#" },
              { name: "纪实文学", url: "#" },
              { name: "艺术", url: "#" },
              { name: "摄影", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "经管",
            links: [
              { name: "成功/励志", url: "#" },
              { name: "管理", url: "#" },
              { name: "投资理财", url: "#" },
              { name: "经济", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "社科",
            links: [
              { name: "历史", url: "#" },
              { name: "心理学", url: "#" },
              { name: "哲学", url: "#" },
              { name: "政治/军事", url: "#" },
              { name: "社会科学", url: "#" },
              { name: "古籍", url: "#" },
              { name: "法律", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "生活",
            links: [
              { name: "亲子/家教", url: "#" },
              { name: "育儿/早教", url: "#" },
              { name: "两性关系", url: "#" },
              { name: "孕产/胎教", url: "#" },
              { name: "保健/养生", url: "#" },
              { name: "旅游/地图", url: "#" },
              { name: "烹饪/美食", url: "#" },
              { name: "时尚/美妆", url: "#" },
              { name: "手工/DIY", url: "#" },
              { name: "家庭/家居", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "科教/进口书",
            links: [
              { name: "计算机/网络", url: "#" },
              { name: "医学", url: "#" },
              { name: "考试", url: "#" },
              { name: "外语", url: "#" },
              { name: "中小学教辅", url: "#" },
              { name: "大中专教材", url: "#" },
              { name: "工具书", url: "#" },
              { name: "童书", url: "#" },
              { name: "进口书", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "下载app",
            links: [
              { name: "安卓版", url: "#" },
              { name: "iOS版", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "管理电子书",
            mode: "no-border",
            links: [
              { name: "管理我的书架", url: "#" },
              { name: "查看我的账户", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_2: [
          {
            title: "学生文具",
            links: [
              { name: "笔袋/文具袋", url: "#" },
              { name: "文具盒", url: "#" },
              { name: "卷笔刀/削笔刀", url: "#" },
              { name: "练字帖/练字板", url: "#", mode: "red" },
              { name: "书皮", url: "#" },
              { name: "视力保护器", url: "#" },
              { name: "握笔器", url: "#" },
              { name: "橡皮", url: "#" },
              { name: "修正液/修正带/修正贴", url: "#" },
              { name: "学生用印/卡通印泥", url: "#", mode: "no-sep" },
              { name: "彩泥/橡皮泥", url: "#" },
              { name: "学生用尺", url: "#" },
              { name: "礼盒套装", url: "#" },
              { name: "圆规", url: "#" },
              { name: "书包", url: "#" },
              { name: "地球仪", url: "#" },
              { name: "儿童DIY", url: "#" },
              { name: "其他", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "笔类",
            links: [
              { name: "钢笔", url: "#", mode: "red" },
              { name: "签字笔", url: "#" },
              { name: "圆珠笔", url: "#" },
              { name: "中性笔", url: "#" },
              { name: "铅笔", url: "#" },
              { name: "记号笔", url: "#" },
              { name: "马克笔", url: "#" },
              { name: "泡泡笔", url: "#" },
              { name: "荧光笔", url: "#" },
              { name: "油漆笔", url: "#" },
              { name: "正姿笔", url: "#" },
              { name: "笔用墨水/补充液/墨囊替芯/铅芯", url: "#" },
              { name: "其他功能笔", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "纸张本册",
            links: [
              { name: "笔记本/记事本", url: "#", mode: "red" },
              { name: "不干胶标签/贴纸", url: "#" },
              { name: "包装纸", url: "#" },
              { name: "分页纸/索引纸", url: "#" },
              { name: "复写纸", url: "#" },
              { name: "活页替芯", url: "#" },
              { name: "课业本/教学用本", url: "#" },
              { name: "日记本", url: "#" },
              { name: "书签", url: "#" },
              { name: "同学录/纪念册", url: "#", mode: "no-sep" },
              { name: "通讯录/电话本", url: "#" },
              { name: "文稿纸/草稿纸", url: "#" },
              { name: "信纸/信封", url: "#" },
              { name: "折纸/手工纸", url: "#" },
              { name: "台历", url: "#" },
              { name: "其他", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "画具/画材",
            links: [
              { name: "勾线笔", url: "#" },
              { name: "水彩笔", url: "#" },
              { name: "蜡笔", url: "#" },
              { name: "油画棒", url: "#" },
              { name: "丙烯颜料", url: "#" },
              { name: "水彩颜料", url: "#" },
              { name: "水粉颜料", url: "#" },
              { name: "画板/画架", url: "#" },
              { name: "绘图/白图纸", url: "#" },
              { name: "描图/硫酸纸", url: "#" },
              { name: "毛边纸", url: "#" },
              { name: "铅画纸", url: "#" },
              { name: "素描/速写本", url: "#", mode: "no-sep" },
              { name: "书法用纸", url: "#" },
              { name: "水写布", url: "#" },
              { name: "宣纸", url: "#" },
              { name: "字帖临摹纸", url: "#" },
              { name: "儿童填色本", url: "#" },
              { name: "毛笔", url: "#" },
              { name: "其他", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "文房用品",
            links: [
              { name: "镇纸", url: "#" },
              { name: "印泥", url: "#" },
              { name: "笔挂", url: "#" },
              { name: "章料", url: "#" },
              { name: "笔筒", url: "#" },
              { name: "笔架/笔搁", url: "#" },
              { name: "笔洗", url: "#" },
              { name: "毛毡", url: "#" },
              { name: "印床", url: "#" },
              { name: "刻刀", url: "#" },
              { name: "笔帘", url: "#" },
              { name: "墨汁", url: "#" },
              { name: "墨条", url: "#" },
              { name: "砚台", url: "#" },
              { name: "文房四宝套装", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "办公用品",
            mode: "no-border",
            links: [
              { name: "笔架/笔插/笔筒", url: "#" },
              { name: "档案盒/档案袋", url: "#" },
              { name: "风琴包/事务包", url: "#" },
              { name: "挂快劳夹", url: "#" },
              { name: "卡套/证件套", url: "#" },
              { name: "文件夹/文件袋", url: "#" },
              { name: "名片盒/名片册", url: "#" },
              { name: "胶粘用品", url: "#" },
              { name: "计算器", url: "#" },
              { name: "书立/阅读架", url: "#", mode: "no-sep" },
              { name: "相册", url: "#" },
              { name: "资料册", url: "#" },
              { name: "裁剪用品", url: "#" },
              { name: "装订用品", url: "#" },
              { name: "胶粘用品", url: "#" },
              { name: "绘图测量用品", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_3: [
          {
            title: "女装",
            links: [
              { name: "连衣裙", url: "#", mode: "red" },
              { name: "T恤", url: "#" },
              { name: "衬衫", url: "#", mode: "red" },
              { name: "外套", url: "#" },
              { name: "卫衣", url: "#" },
              { name: "风衣", url: "#" },
              { name: "羊绒", url: "#" },
              { name: "半身裙", url: "#" },
              { name: "裤装", url: "#" },
              { name: "休闲裤", url: "#" },
              { name: "牛仔裤", url: "#" },
              { name: "套装", url: "#" },
              { name: "西装", url: "#", mode: "no-sep" },
              { name: "短裤", url: "#" },
              { name: "毛呢大衣", url: "#" },
              { name: "针织毛衣", url: "#" },
              { name: "羽绒服", url: "#" },
              { name: "大码", url: "#" },
              { name: "亲子装", url: "#" },
              { name: "真丝", url: "#" },
              { name: "少女装", url: "#" },
              { name: "少淑装", url: "#" },
              { name: "淑女装", url: "#" },
              { name: "成熟女装", url: "#", mode: "no-sep" },
              { name: "中老年", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "男装",
            links: [
              { name: "卫衣", url: "#" },
              { name: "夹克", url: "#" },
              { name: "休闲裤", url: "#" },
              { name: "牛仔裤", url: "#", mode: "red" },
              { name: "长袖T恤", url: "#" },
              { name: "长袖衬衫", url: "#" },
              { name: "针织衫", url: "#" },
              { name: "风衣", url: "#" },
              { name: "毛呢大衣", url: "#" },
              { name: "皮衣", url: "#" },
              { name: "外套", url: "#", mode: "red-no-sep" },
              { name: "短袖T恤", url: "#" },
              { name: "polo衫", url: "#" },
              { name: "短袖衬衫", url: "#" },
              { name: "短裤", url: "#" },
              { name: "西服", url: "#" },
              { name: "西裤", url: "#" },
              { name: "西服套装", url: "#" },
              { name: "羽绒服", url: "#" },
              { name: "青春", url: "#" },
              { name: "商务", url: "#" },
              { name: "休闲", url: "#", mode: "no-sep" },
              { name: "潮牌", url: "#" },
              { name: "中老年男装", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "内衣",
            links: [
              { name: "男士家居服", url: "#" },
              { name: "女士家居服", url: "#" },
              { name: "睡裙", url: "#", mode: "red" },
              { name: "浴袍", url: "#" },
              { name: "秋衣秋裤", url: "#" },
              { name: "文胸", url: "#", mode: "red" },
              { name: "文胸套装", url: "#" },
              { name: "抹胸", url: "#" },
              { name: "女士内裤", url: "#" },
              { name: "男士内裤", url: "#", mode: "no-sep" },
              { name: "打底裤", url: "#" },
              { name: "女袜", url: "#" },
              { name: "男袜", url: "#" },
              { name: "棉袜", url: "#" },
              { name: "连裤袜", url: "#" },
              { name: "塑身衣", url: "#" },
              { name: "背心", url: "#" },
              { name: "吊带", url: "#" },
              { name: "女士保暖", url: "#" },
              { name: "男士保暖", url: "#" },
              { name: "保暖套装", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "服饰配件",
            links: [
              { name: "帽子", url: "#" },
              { name: "手套", url: "#" },
              { name: "腰带/皮带/腰链/腰封", url: "#" },
              { name: "围巾/披肩/丝巾", url: "#", mode: "red" },
              { name: "太阳镜", url: "#" },
              { name: "领带/领结/领带夹", url: "#" },
              { name: "其他", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "童装童鞋",
            mode: "no-border",
            links: [
              { name: "长袖T恤", url: "#" },
              { name: "裤子", url: "#" },
              { name: "连衣裙", url: "#" },
              { name: "卫衣", url: "#" },
              { name: "衬衫", url: "#" },
              { name: "套装", url: "#" },
              { name: "打底裤", url: "#" },
              { name: "针织衫", url: "#" },
              { name: "外套", url: "#" },
              { name: "背心", url: "#" },
              { name: "内衣家居", url: "#", mode: "no-sep" },
              { name: "儿童袜子", url: "#" },
              { name: "演出服", url: "#" },
              { name: "配饰/用品", url: "#" },
              { name: "羽绒服", url: "#" },
              { name: "运动/户外鞋", url: "#" },
              { name: "休闲鞋", url: "#" },
              { name: "帆布鞋/板鞋", url: "#" },
              { name: "小白鞋", url: "#" },
              { name: "皮鞋", url: "#", mode: "no-sep" },
              { name: "学步鞋", url: "#" },
              { name: "凉鞋", url: "#" },
              { name: "拖鞋", url: "#" },
              { name: "舞蹈鞋", url: "#" },
              { name: "棉鞋", url: "#" },
              { name: "靴子", url: "#" },
              { name: "婴儿服饰", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_4: [
          {
            title: "女鞋",
            links: [
              { name: "帆布鞋", url: "#", mode: "red" },
              { name: "老爹鞋", url: "#", mode: "red" },
              { name: "小白鞋", url: "#", mode: "red" },
              { name: "凉鞋", url: "#" },
              { name: "玛丽珍鞋", url: "#" },
              { name: "时尚布鞋", url: "#" },
              { name: "平底鞋", url: "#" },
              { name: "休闲鞋", url: "#" },
              { name: "单鞋", url: "#" },
              { name: "豆豆鞋", url: "#" },
              { name: "低跟鞋", url: "#", mode: "no-sep" },
              { name: "坡跟鞋", url: "#" },
              { name: "高跟鞋", url: "#" },
              { name: "松糕鞋", url: "#" },
              { name: "乐福鞋", url: "#" },
              { name: "妈妈鞋", url: "#" },
              { name: "拖鞋", url: "#" },
              { name: "短靴", url: "#" },
              { name: "女靴", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "男鞋",
            links: [
              { name: "帆布鞋", url: "#", mode: "red" },
              { name: "板鞋", url: "#", mode: "red" },
              { name: "凉鞋", url: "#", mode: "red" },
              { name: "户外休闲", url: "#" },
              { name: "网面鞋", url: "#" },
              { name: "乐福鞋", url: "#" },
              { name: "商务休闲", url: "#" },
              { name: "正装皮鞋", url: "#" },
              { name: "运动休闲", url: "#" },
              { name: "驾车鞋", url: "#", mode: "no-sep" },
              { name: "豆豆鞋", url: "#" },
              { name: "布洛克", url: "#" },
              { name: "工装鞋", url: "#" },
              { name: "内增高", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "童鞋",
            links: [
              { name: "休闲鞋", url: "#" },
              { name: "运动/户外鞋", url: "#" },
              { name: "棉鞋", url: "#" },
              { name: "雪地靴", url: "#" },
              { name: "帆布鞋/板鞋", url: "#" },
              { name: "皮鞋", url: "#" },
              { name: "拖鞋", url: "#" },
              { name: "学步鞋", url: "#" },
              { name: "舞蹈鞋", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "女包",
            links: [
              { name: "单肩包", url: "#", mode: "red" },
              { name: "双肩包", url: "#", mode: "red" },
              { name: "斜挎包", url: "#" },
              { name: "提挎多用包", url: "#" },
              { name: "手拎包", url: "#" },
              { name: "链条包", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "男包",
            links: [
              { name: "手提包", url: "#", mode: "red" },
              { name: "双肩包", url: "#", mode: "red" },
              { name: "单肩/斜挎包", url: "#" },
              { name: "钱包/卡包", url: "#" },
              { name: "腰包", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "功能包",
            mode: "no-border",
            links: [
              { name: "拉杆箱", url: "#" },
              { name: "旅行包", url: "#", mode: "red" },
              { name: "书包", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_5: [],
        Detail_6: [],
        Detail_7: [
          {
            title: "家纺",
            links: [
              { name: "床品套件", url: "#" },
              { name: "酒店床品", url: "#" },
              { name: "轻奢床品", url: "#" },
              { name: "床单/被罩", url: "#" },
              { name: "儿童床品", url: "#", mode: "red" },
              { name: "床垫/床褥", url: "#" },
              { name: "靠垫/坐垫", url: "#" },
              { name: "枕芯", url: "#" },
              { name: "毛巾/浴巾", url: "#" },
              { name: "家居鞋", url: "#" },
              { name: "夏被", url: "#" },
              { name: "凉席", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "时尚家饰",
            links: [
              { name: "地毯/地垫", url: "#", mode: "red" },
              { name: "沙发垫", url: "#" },
              { name: "窗帘/浴帘", url: "#" },
              { name: "桌布/罩件", url: "#" },
              { name: "挂钟/闹钟", url: "#" },
              { name: "墙壁装饰", url: "#" },
              { name: "摆饰/挂件", url: "#" },
              { name: "节庆/婚庆用品", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "水具",
            links: [
              { name: "塑料杯", url: "#", mode: "red" },
              { name: "玻璃杯", url: "#" },
              { name: "保温杯", url: "#" },
              { name: "保温壶", url: "#" },
              { name: "儿童水杯", url: "#", mode: "red" },
              { name: "陶瓷/马克杯", url: "#" },
              { name: "茶具", url: "#" },
              { name: "酒具", url: "#" },
              { name: "咖啡具", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "厨具",
            links: [
              { name: "炒锅", url: "#" },
              { name: "煎锅", url: "#" },
              { name: "蒸锅", url: "#" },
              { name: "压力锅", url: "#" },
              { name: "汤煲", url: "#", mode: "red" },
              { name: "汤锅", url: "#" },
              { name: "奶锅", url: "#" },
              { name: "套装锅", url: "#" },
              { name: "保鲜盒", url: "#" },
              { name: "刀剪菜板", url: "#" },
              { name: "碗盘餐具", url: "#" },
              { name: "厨房杂件", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "整理收纳",
            links: [
              { name: "收纳柜", url: "#" },
              { name: "整理箱收纳盒", url: "#" },
              { name: "压缩袋防尘罩", url: "#" },
              { name: "置物架/篮", url: "#" },
              { name: "衣架/烫衣板", url: "#" },
              { name: "儿童收纳", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "清洁护理",
            links: [
              { name: "清洁工具", url: "#" },
              { name: "保暖防护", url: "#" },
              { name: "垃圾桶/袋", url: "#" },
              { name: "一次性用品", url: "#" },
              { name: "卫浴用品", url: "#" },
              { name: "净化除味", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "居家日用",
            links: [
              { name: "鲜花绿植", url: "#" },
              { name: "雨伞雨具", url: "#" },
              { name: "遮阳伞", url: "#", mode: "red" },
              { name: "家居礼品", url: "#" },
              { name: "口罩", url: "#", mode: "red" },
              { name: "眼罩", url: "#" },
              { name: "耳塞", url: "#" },
              { name: "手套", url: "#", mode: "red" },
              { name: "杀虫驱蚊", url: "#" },
              { name: "儿童雨具", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "健身瑜伽",
            links: [
              { name: "瑜伽垫", url: "#" },
              { name: "瑜伽套装", url: "#" },
              { name: "瑜伽配件", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "宠物用品",
            links: [
              { name: "宠物食品", url: "#", mode: "red" },
              { name: "宠物食具", url: "#" },
              { name: "美容清洁", url: "#" },
              { name: "美容工具", url: "#" },
              { name: "窝垫/笼具", url: "#" },
              { name: "宠物牵引", url: "#" },
              { name: "宠物玩具", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "汽车用品",
            mode: "no-border",
            links: [
              { name: "坐垫脚垫", url: "#" },
              { name: "竹炭", url: "#" },
              { name: "雨刷", url: "#" },
              { name: "玻璃水", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_8: [
          {
            title: "客厅家具",
            links: [
              { name: "沙发", url: "#" },
              { name: "茶几", url: "#", mode: "red" },
              { name: "鞋柜", url: "#" },
              { name: "电视柜", url: "#" },
              { name: "椅子凳子", url: "#" },
              { name: "餐桌", url: "#" },
              { name: "餐边柜", url: "#" },
              { name: "餐椅", url: "#" },
              { name: "酒柜", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "卧室家具",
            links: [
              { name: "简易衣柜", url: "#", mode: "red" },
              { name: "大衣柜", url: "#" },
              { name: "床", url: "#" },
              { name: "床垫", url: "#" },
              { name: "梳妆台", url: "#" },
              { name: "斗柜", url: "#" },
              { name: "床头柜", url: "#" },
              { name: "童床", url: "#" },
              { name: "儿童床垫", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "书房家具",
            links: [
              { name: "书柜书架", url: "#", mode: "red" },
              { name: "书桌", url: "#" },
              { name: "电脑桌椅", url: "#" },
              { name: "儿童学习桌椅", url: "#" },
              { name: "办公家具", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "储物家具",
            links: [
              { name: "层架置物架", url: "#", mode: "red" },
              { name: "鞋架", url: "#" },
              { name: "衣帽架", url: "#" },
              { name: "墙面搁架", url: "#" },
              { name: "收纳家具", url: "#" },
              { name: "晾衣架", url: "#" },
              { name: "花架/装饰架", url: "#" },
              { name: "户外家具", url: "#" },
              { name: "家用梯", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "厨房卫浴",
            links: [
              { name: "座便器", url: "#" },
              { name: "淋浴花洒", url: "#", mode: "red" },
              { name: "浴室柜", url: "#" },
              { name: "水槽", url: "#" },
              { name: "龙头", url: "#" },
              { name: "厨卫挂件", url: "#" },
              { name: "地漏", url: "#" },
              { name: "净水软水", url: "#" },
              { name: "浴霸", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "灯具照明",
            links: [
              { name: "花灯/吊灯/水晶灯", url: "#" },
              { name: "吸顶灯", url: "#" },
              { name: "阅读台灯", url: "#", mode: "red" },
              { name: "镜前灯", url: "#" },
              { name: "筒射灯", url: "#" },
              { name: "节能灯", url: "#" },
              { name: "装饰台灯", url: "#" },
              { name: "小夜灯", url: "#" },
              { name: "壁灯", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "家装建材",
            links: [
              { name: "开关插座", url: "#", mode: "red" },
              { name: "插线板", url: "#" },
              { name: "手动工具", url: "#" },
              { name: "电动工具", url: "#" },
              { name: "家用五金", url: "#" },
              { name: "壁纸", url: "#" },
              { name: "仪器仪表", url: "#" },
              { name: "测量工具", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "按摩设备",
            mode: "no-border",
            links: [
              { name: "按摩椅", url: "#" },
              { name: "按摩器", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_9: [],
        Detail_10: [],
        Detail_11: [],
        Detail_12: [],
        Detail_13: [],
        Detail_14: [
          {
            title: "V卡",
            links: [
              { name: "固定面值卡", url: "#" },
              { name: "自定义面值卡", url: "#", mode: "red-no-sep" },
            ],
          },
          {
            title: "经典卡",
            links: [
              { name: "读书卡", url: "#" },
              { name: "经典卡", url: "#" },
              { name: "瑞狗闹春", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "主题卡",
            links: [
              { name: "奇先生妙小姐", url: "#", mode: "red" },
              { name: "生日卡", url: "#" },
              { name: "三国演义", url: "#" },
              { name: "西游记", url: "#" },
              { name: "红楼梦", url: "#", mode: "red" },
              { name: "水浒传", url: "#" },
              { name: "梅", url: "#" },
              { name: "兰", url: "#" },
              { name: "竹", url: "#" },
              { name: "菊", url: "#", mode: "red" },
              { name: "歪歪兔", url: "#" },
              { name: "百变马丁", url: "#" },
              { name: "皮皮鲁系列", url: "#" },
              { name: "Baby卡", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "节日卡",
            links: [
              { name: "元旦卡", url: "#" },
              { name: "春节卡", url: "#" },
              { name: "情人卡", url: "#" },
              { name: "女人卡", url: "#" },
              { name: "五一卡", url: "#" },
              { name: "端午卡", url: "#", mode: "red" },
              { name: "教师卡", url: "#" },
              { name: "中秋卡", url: "#" },
              { name: "国庆卡", url: "#" },
              { name: "圣诞卡", url: "#" },
              { name: "新生儿卡", url: "#", mode: "red-no-sep" },
            ],
          },
          {
            title: "生肖卡",
            links: [
              { name: "鼠", url: "#" },
              { name: "牛", url: "#" },
              { name: "虎", url: "#" },
              { name: "兔", url: "#" },
              { name: "龙", url: "#" },
              { name: "蛇", url: "#" },
              { name: "马", url: "#" },
              { name: "羊", url: "#" },
              { name: "猴", url: "#" },
              { name: "鸡", url: "#" },
              { name: "狗", url: "#" },
              { name: "猪", url: "#", mode: "red-no-sep" },
            ],
          },
          {
            title: "教育培训",
            mode: "no-border",
            links: [
              { name: "职业资质", url: "#" },
              { name: "学历教育", url: "#" },
              { name: "语言培训", url: "#" },
              { name: "在线教学", url: "#" },
              { name: "学习卡", url: "#", mode: "no-sep" },
            ],
          },
        ],
      },
    };
  },
  actions,
  getters,
  mutations,
};
